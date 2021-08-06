import { getRepository } from "typeorm";
import Discipline from "../entities/Discipline";

export async function findAll() {
    const disciplines = await getRepository(Discipline).find({
        relations:['exams']
    });
    return disciplines;
}

export async function findOne(id: number) {
    try{
        const discipline = await getRepository(Discipline).findOneOrFail(id, {
            relations:['exams']
        })
        discipline.exams = discipline.exams.sort((a, b) => (
            a.name < b.name ? -1 : 1
        ))
        return discipline;
    }
    catch(err){
        throw Error('Not Found');
    }
}