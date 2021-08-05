import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createProfessor } from "../factories/professorFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("GET /professors", () => {
  it("should return with text \"OK!\" and status 200", async () => {
    const professor = await createProfessor();

    const response = await supertest(app).get("/professors");
    
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: professor.name,
          image:professor.image
        })
      ])
    );

    expect(response.status).toBe(200);
  });
});

describe("GET /professor/:id", () => {
  it('should return with text "OK!" and status 200 ', async () => {
    const professor = await createProfessor();
  
    const response = await supertest(app).get(`/professor/${professor.id}`);

    expect(response.body).toEqual(
        expect.objectContaining({
          name:professor.name,
          image: professor.image
        })
    )
  })

  it(`should return with status 404 when element not found`, async () => {
    const response = await supertest(app).get("/professor/0");

    expect(response.status).toEqual(404);
  })
})