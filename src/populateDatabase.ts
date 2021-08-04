import { createProfessor } from "./factories/professorFactory";
import { createDiscipline } from "./factories/disciplineFactory";
import { createExam } from './factories/examFactory'
import Discipline from "./entities/Discipline";
import Professor from "./entities/Professor";
import { clearDatabase } from './utils/database'

interface CreateExam {
    name?: string; 
    pdf?: string;
    category?: string;
    discipline?: Discipline;
    professor?: Professor;
}

export default async function populateDatabase() {
    await clearDatabase(); 

    const professorJoao = await createProfessor('João');
    const professorCarlos = await createProfessor('Carlos');
    const professorEduardo = await createProfessor('Edwardo');
    const professorMartha = await createProfessor('Maria');

    const disciplineMath = await createDiscipline('Matemática', [professorCarlos, professorEduardo])
    const disciplineGeometry = await createDiscipline('Geometria', [professorJoao, professorCarlos]);
    const disciplineStatistics = await createDiscipline('Estatística', [professorMartha, professorCarlos])

    const exam1: CreateExam = { name: '2020.1', category: 'P1', discipline:disciplineGeometry, professor:professorCarlos };
    await createExam(exam1);

    const exam2: CreateExam = { name: '2020.1', category:'P2', discipline:disciplineGeometry, professor: professorJoao };
    await createExam(exam2);

    const exam3: CreateExam = { name: '2020.1', category:'P3', discipline:disciplineGeometry, professor: professorJoao };
    await createExam(exam3);

    const exam4: CreateExam = { name: '2020.2', category:'P3', discipline:disciplineGeometry, professor: professorJoao };
    await createExam(exam4);

    const exam5: CreateExam = { name: '2019.1', category:'2ch', discipline:disciplineMath, professor: professorCarlos };
    await createExam(exam5);

    const exam6: CreateExam = { name: '2020.1', category:'P2', discipline:disciplineMath, professor: professorEduardo };
    await createExam(exam6);

    const exam7: CreateExam = { name: '2020.2', category:'P3', discipline:disciplineMath, professor: professorCarlos };
    await createExam(exam7);

    const exam8: CreateExam = { name: '2020.1', category:'P1', discipline:disciplineMath, professor: professorJoao };
    await createExam(exam8);

    const exam9: CreateExam = { name: '2018.1', category:'P1', discipline:disciplineStatistics, professor: professorMartha };
    await createExam(exam9);

    const exam10: CreateExam = { name: '2020.1', category:'P2', discipline:disciplineStatistics, professor: professorCarlos };
    await createExam(exam10);
    
    const exam11: CreateExam = { name: '2020.2', category:'P3', discipline:disciplineStatistics, professor: professorMartha };
    await createExam(exam11);
    
    const exam12: CreateExam = { name: '2020.1', category:'2ch', discipline:disciplineStatistics, professor: professorCarlos };
    await createExam(exam12);
    

}

