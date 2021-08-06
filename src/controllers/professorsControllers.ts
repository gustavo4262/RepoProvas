import { Request, Response } from "express";

import * as professorServices from "../services/professorServices"

export async function getProfessors(req:Request, res:Response) {
    try{
        const professors = await professorServices.findAll();
        return res.send(professors)
    }
    catch(err){
        return res.sendStatus(500);
    }
}

export async function getProfessor(req: Request, res: Response) {
    try{
        const id = Number(req.params.id);
        
        if ( isNaN(id) ) throw Error('Bad Request');

        const professor = await professorServices.findOne(id);
        return res.send(professor);
    }
    catch(err){
        if(err.message === 'Not Found') return res.sendStatus(404);
        if(err.message === 'Bad Request') return res.sendStatus(400);
        return res.sendStatus(500);
    }
}

export async function getProfessorByDiscipline(req: Request, res: Response) {
    try{
        const disciplineId: number = Number(req.params.disciplineId);
        
        if ( isNaN(disciplineId) ) throw Error('Bad Request');

        const professors = await professorServices.findByDiscipline(disciplineId);
        
        res.send(professors);
    }
    catch(err){
        if(err.message === 'Not Found') return res.sendStatus(404);
        if(err.message === 'Bad Request') return res.sendStatus(400);
        return res.sendStatus(500);
    }
}