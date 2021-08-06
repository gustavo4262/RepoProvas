import { getConnection, getRepository } from "typeorm";
import Professor from "../entities/Professor";

import * as disciplinesServices from '../services/disciplinesServices'

export async function findAll() {
    const professors = await getRepository(Professor).find({
        relations:['exams']
    });
    return professors;
}   

export async function findOne(id: number) {
    const professor = await getRepository(Professor).findOne(id, {
        relations: ['exams', 'disciplines']
    });

    if (!professor) throw Error('Not Found');
    
    professor.exams = professor.exams.sort((a, b) =>
        a.category < b.category ? -1 : 1
    );
    return professor;
}

export async function findByDiscipline(disciplineId: number) {
    await disciplinesServices.findOne(disciplineId);
    const professors = await getConnection()
                             .getRepository(Professor)
                             .createQueryBuilder("professor")
                             .leftJoinAndSelect("professor.disciplines", "discipline")
                             .where('discipline.id = :disciplineId', { disciplineId })
                             .getMany();
    return professors;
}