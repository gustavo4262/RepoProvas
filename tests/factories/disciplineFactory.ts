import { getRepository } from "typeorm";
import Discipline from "../../src/entities/Discipline";
import faker from 'faker'
import Professor from "../../src/entities/Professor";

export async function createDiscipline(name?: string, image?: string, professors?: Professor[]){

    const newDiscipline = new Discipline();
    newDiscipline.name = name || faker.name.jobArea();
    newDiscipline.image = image || faker.image.imageUrl();
    newDiscipline.professors = professors || [];
    
    await getRepository(Discipline).save(newDiscipline)
    
    return newDiscipline;
}
