import { getRepository } from "typeorm";

import Professor from "../../src/entities/Professor"
import Discipline from "../../src/entities/Discipline"
import Exam from "../../src/entities/Exam"


export async function clearDatabase () {
  await getRepository(Exam).delete({});
  await getRepository(Professor).delete({});
  await getRepository(Discipline).delete({});
}
