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

describe("GET /users", () => {
  it("should answer with text \"OK!\" and status 200", async () => {
    const professor = await createProfessor();

    const response = await supertest(app).get("/professors");
    
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: professor.name
        })
      ])
    );

    expect(response.status).toBe(200);
  });
});
