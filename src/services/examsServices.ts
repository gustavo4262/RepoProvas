import { getRepository } from "typeorm";
import Exam from "../entities/Exam";

import * as professorServices from "../services/professorServices"
import * as disciplinesServices from '../services/disciplinesServices'
import Professor from "../entities/Professor";
import Discipline from "../entities/Discipline";

interface CreateExam {
    name: string,
    category: string,
    pdf: string,
    professorId: number,
    disciplineId: number
}

interface GenerateExam {
    name: string,
    category: string,
    pdf: string,
    professor: Professor,
    discipline: Discipline 
}


export async function createExam(exam: CreateExam) {
    const professor = await professorServices.findOne(exam.professorId);
    const discipline = await disciplinesServices.findOne(exam.disciplineId)
    const existingExam = await getRepository(Exam).findOne({
        name: exam.name,
        category: exam.category,
        pdf: exam.pdf,
        professor: professor, 
        discipline: discipline
    });
    if (existingExam) throw Error('Conflict');

    await getRepository(Exam).insert( {
        name: exam.name, 
        category: exam.category,
        pdf: exam.pdf,
        professor,
        discipline
    })
    
}

export async function validateCategory(category: string) {
    const possibleCategories = ['P1', 'P2', 'P3', '2ch', 'Outras'];
    return possibleCategories.includes(category);
}
