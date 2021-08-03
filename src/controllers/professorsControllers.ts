import { Request, Response } from "express";

import * as professorServices from "../services/professorServices"

export async function getProfessor(req:Request, res:Response) {
    try{
        const professors = await professorServices.findAll();
        return res.send(professors)
    }
    catch(err){
        console.log(err.message)
        return res.sendStatus(500);
    }
}