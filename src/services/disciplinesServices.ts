import { getRepository } from "typeorm";
import Discipline from "../entities/Discipline";

export async function findAll() {
    const disciplines = await getRepository(Discipline).find({
        relations:['exams']
    });
    return disciplines;
}