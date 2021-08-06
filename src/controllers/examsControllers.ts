import { Request, Response } from "express";

import * as examsServices from '../services/examsServices'

interface PostBody {
    name: string,
    category: string,
    pdf: string,
    professorId: number,
    disciplineId: number
}

export async function postExam(req:Request, res:Response) {
    try{
        const { name, category, pdf, professorId, disciplineId } : PostBody = req.body;

        if (!name || !category || !pdf || isNaN(professorId) || isNaN(disciplineId))
            throw Error('Bad Request');
        
        if ( !examsServices.validateCategory(category) )
            throw Error('Bad Request');

        
        await examsServices.createExam({ name, category, pdf, professorId, disciplineId });

        return res.sendStatus(201);
    }
    catch(err){
        console.log(err.message)
        if(err.message === 'Bad Request') return res.sendStatus(400);
        if(err.message === 'Not Found') return res.sendStatus(404);
        if(err.message === 'Conflict') return res.sendStatus(409);
        res.sendStatus(500);
    }
}