import { getRepository } from "typeorm";
import faker from 'faker'
import Professor from "../../src/entities/Professor";

export async function createProfessor () : Promise<Professor> {
  const newProfessor = await getRepository(Professor).create({
      name: faker.name.findName()
    })

  await getRepository(Professor).save(newProfessor);

  return newProfessor;
}
