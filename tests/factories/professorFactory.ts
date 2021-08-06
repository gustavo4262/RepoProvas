import { getRepository } from "typeorm";
import faker from 'faker'
import Professor from "../../src/entities/Professor";
import Discipline from "../../src/entities/Discipline";

export async function createProfessor (name?:string, image?:string, disciplines?: Discipline[]) : Promise<Professor> {
  const newProfessor = new Professor();
  newProfessor.name = name || faker.name.firstName();
  newProfessor.image = image || faker.image.imageUrl();
  newProfessor.disciplines = disciplines || [];

  await getRepository(Professor).save(newProfessor);

  return newProfessor;
}
