import { getRepository } from "typeorm";
import Discipline from "../../src/entities/Discipline";
import faker from 'faker'

export async function createDiscipline(name?: string, image?: string) : Promise<Discipline>{

    const newDiscipline = new Discipline();
    newDiscipline.name = name || faker.name.jobArea();
    newDiscipline.image = image || faker.image.imageUrl();
    
    await getRepository(Discipline).save(newDiscipline)
    
    return newDiscipline;
}
