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