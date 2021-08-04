import Exam from "../entities/Exam";
import faker from 'faker'
import Discipline from "../entities/Discipline";
import { createDiscipline } from "./disciplineFactory";
import Professor from "../entities/Professor";
import { createProfessor } from "./professorFactory";
import { getConnection, getRepository } from "typeorm";

interface CreateExam {
    name?: string; 
    pdf?: string;
    category?: string;
    discipline?: Discipline;
    professor?: Professor;
}

export async function createExam(exam: CreateExam) {
    const newExam = new Exam()
    
    const randomYear = '20' + ('0' + Math.floor(Math.random() * 21)).slice(-2) 
    const randomSemester = Math.floor(Math.random() * 2 + 1)
    newExam.name = exam.name || randomYear + '.' + randomSemester

    newExam.pdf = exam.pdf || faker.image.imageUrl()

    const categories = ['P1', 'P2', 'P3', '2ch', 'Outras']
    newExam.category = exam.category || categories[ Math.floor( Math.random() * 5 ) ]

    const newDiscipline = exam.discipline || await createDiscipline()
    newExam.discipline =  newDiscipline

    const newProfessor = exam.professor || await createProfessor()
    newExam.professor =  newProfessor;

    await getRepository(Exam).save(newExam);

    try{
        await getConnection()
        .createQueryBuilder()
        .relation(Discipline, "professors")
        .of(newDiscipline)
        .add(newProfessor)
    } catch(err){
    }
}