import { getRepository } from "typeorm";

// import User from "../../src/entities/User";
import Professor from "../../src/entities/Professor"
import Discipline from "../../src/entities/Discipline"
import Exam from "../../src/entities/Exam"



export async function clearDatabase () {
  await getRepository(Discipline).delete({});
  await getRepository(Exam).delete({});
  await getRepository(Professor).delete({});
}
