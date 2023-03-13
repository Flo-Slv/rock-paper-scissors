import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World From the Typescript Server!");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`🚀 Server is ready at http://localhost:${port}`);
});
