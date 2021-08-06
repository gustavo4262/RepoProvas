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
