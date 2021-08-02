import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as professorsControllers from "./controllers/professorsControllers"

const app = express();
app.use(cors());
app.use(express.json());

app.get("/professors", professorsControllers.getProfessor )

export async function init () {
  await connectDatabase();
}

export default app;
