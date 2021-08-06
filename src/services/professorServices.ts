import { getRepository } from "typeorm";
import Professor from "../entities/Professor";

export async function findAll() {
    const professors = await getRepository(Professor).find({relations:['exams']});
    return professors;
}   

export async function findOne(id: number) {
    try{
        const professor = await getRepository(Professor).findOneOrFail(id, {
            relations: ['exams']
        });
        professor.exams = professor.exams.sort((a, b) =>
            a.category < b.category ? -1 : 1
        );
        return professor;
    }
    catch(err){
        throw Error('Not Found')
    }
}