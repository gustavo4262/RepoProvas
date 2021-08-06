import supertest from "supertest";
import { getConnection } from "typeorm";
import faker from 'faker'

import app, { init } from "../../src/app";
import { clearDatabase } from "../utils/database";
import { createProfessor } from "../factories/professorFactory";
import { createDiscipline } from "../factories/disciplineFactory";
import { createExam } from "../factories/examFactory"

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("post /exams", () => {
  function generateBody(body: GenerateBody){
    const categories = ['P1', 'P2', 'P3', '2ch', 'Outras']
    const randomYear = '20' + ('0' + Math.floor(Math.random() * 21)).slice(-2) 
    const randomSemester = Math.floor(Math.random() * 2 + 1)
    return {
        name: body.name || randomYear + '.' + randomSemester,
        category: body.category || categories[ Math.floor( Math.random() * 5 ) ],
        pdf: body.pdf || faker.image.imageUrl(),
        professorId : body.professorId,
        disciplineId: body.disciplineId
    }
  }

  it("should return with text \"OK!\" and status 201", async () => {
    const professor = await createProfessor();
    const discipline = await createDiscipline();
    const body = generateBody({
        professorId: professor.id,
        disciplineId: discipline.id
    })

    const response = await supertest(app).post('/exam').send(body);
    
    expect(response.status).toEqual(201);
  });

  it("should return status 400 when category does not match with possible ones", async () => {
    const professor = await createProfessor();
    const discipline = await createDiscipline();
    const body = generateBody({
        professorId: professor.id,
        disciplineId: discipline.id,
        category: 'P11'
    })

    const response = await supertest(app).post('/exam').send(body);
    
    expect(response.status).toEqual(400);
  });

  it("should return with status 404 when professor does not exists", async () => {
    const discipline = await createDiscipline();
    const body = generateBody({
        professorId: 0,
        disciplineId: discipline.id
    })

    const response = await supertest(app).post('/exam').send(body);
    
    expect(response.status).toEqual(404);
  });

  it("should return with status 404 when discipline does not exists", async () => {
    const professor = await createProfessor();
    const body = generateBody({
        professorId: professor.id,
        disciplineId: 0
    })

    const response = await supertest(app).post('/exam').send(body);
    
    expect(response.status).toEqual(404);
  });

  it("should return with status 409 when exam alredy exists", async () => {
    const exam = await createExam({});
    const body = generateBody({
        professorId: exam.professor.id,
        disciplineId: exam.discipline.id,
        name: exam.name,
        category: exam.category,
        pdf: exam.pdf
    })

    const response = await supertest(app).post('/exam').send(body);
    
    expect(response.status).toEqual(409);
  });

});

interface GenerateBody {
    professorId: number,
    disciplineId: number,
    name?: string,
    category?: string,
    pdf?: string
}