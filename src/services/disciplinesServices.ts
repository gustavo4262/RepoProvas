import { getRepository } from "typeorm";
import Discipline from "../entities/Discipline";

export async function findAll() {
    const disciplines = await getRepository(Discipline).find({
        relations:['exams']
    });
    return disciplines;
}

export async function findOne(id: number) {
    const discipline = await getRepository(Discipline).findOne(id, {
        relations:['exams', 'professors']
    })

    if (!discipline) throw Error('Not Found');

    discipline.exams = discipline.exams.sort((a, b) => (
        a.name < b.name ? -1 : 1
    ))
    return discipline;
}