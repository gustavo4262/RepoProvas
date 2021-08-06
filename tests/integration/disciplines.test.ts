import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { clearDatabase } from "../utils/database";
import { createDiscipline } from '../factories/disciplineFactory'

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("GET /disciplines", () => {
  it("should return with text \"OK!\" and status 200", async () => {
    const disciplines = await createDiscipline();

    const response = await supertest(app).get("/disciplines");
    
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: disciplines.name,
        })
      ])
    );

    expect(response.status).toBe(200);
  });
});

describe("GET /discipline/:id", () => {
  it('should return with text "OK!" and status 200 ', async () => {
    const discipline = await createDiscipline();
  
    const response = await supertest(app).get(`/discipline/${discipline.id}`);

    expect(response.body).toEqual(
        expect.objectContaining({
          name:discipline.name,
          image: discipline.image
        })
    )

    expect(response.status).toBe(200);
  })

  it(`should return with status 404 when element not found`, async () => {
    const response = await supertest(app).get("/discipline/0");

    expect(response.status).toEqual(404);
  })

  it(`should return with status 400 when id is not a number`, async () => {
    const response = await supertest(app).get('/discipline/string');

    expect(response.status).toEqual(400);
  })
})