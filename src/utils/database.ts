import { getRepository } from "typeorm";

// import User from "../../src/entities/User";
import Professor from "../entities/Professor"
import Discipline from "../entities/Discipline"
import Exam from "../entities/Exam"



export async function clearDatabase () {
  await getRepository(Exam).delete({});
  await getRepository(Discipline).delete({});
  await getRepository(Professor).delete({});
}
