import { Request, Response } from "express";

import * as disciplinesServices from '../services/disciplinesServices'

export async function getDisciplines(req:Request, res:Response) {
    try{
        const disciplines = await disciplinesServices.findAll();
        return res.send(disciplines);
    }
    catch(err){
        res.sendStatus(500);
    }   
}

export async function getDiscipline(req: Request, res: Response) {
    try{
        const id = Number(req.params.id);

        if ( isNaN(id) ) throw Error('Bad Request');

        const discipline = await disciplinesServices.findOne(id);
        return res.send(discipline);

    }
    catch(err){
        if (err.message === 'Bad Request') return res.sendStatus(400);
        if (err.message === 'Not Found') return res.sendStatus(404);
        return res.sendStatus(500);
    }
}