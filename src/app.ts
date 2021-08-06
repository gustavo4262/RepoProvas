import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
// import populateDatabase from '../populateDatabase'

import * as professorsControllers from "./controllers/professorsControllers"
import * as disciplinesControllers from "./controllers/disciplinesControllers"
import * as examsControllers from "./controllers/examsControllers"

const app = express();
app.use(cors());
app.use(express.json());

app.get("/professors", professorsControllers.getProfessors )

app.get("/professor/:id", professorsControllers.getProfessor )

app.get("/disciplines", disciplinesControllers.getDisciplines )

app.get("/discipline/:id", disciplinesControllers.getDiscipline )

app.post("/exam", examsControllers.postExam )

export async function init () {
  await connectDatabase();
  // await populateDatabase();
}

export default app;
