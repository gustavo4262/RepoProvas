import { getRepository } from "typeorm";
import faker from 'faker'
import Professor from "../../src/entities/Professor";

export async function createProfessor (name?:string, image?:string) : Promise<Professor> {
  const newProfessor = new Professor();
  newProfessor.name = name || faker.name.firstName();
  newProfessor.image = image || faker.image.imageUrl();

  await getRepository(Professor).save(newProfessor);

  return newProfessor;
}
