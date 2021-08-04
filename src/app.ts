import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as professorsControllers from "./controllers/professorsControllers"
import populateDatabase from "./populateDatabase";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/professors", professorsControllers.getProfessor )

export async function init () {
  await connectDatabase();
  await populateDatabase()
}

export default app;
