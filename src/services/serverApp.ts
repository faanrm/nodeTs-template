import { Application } from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { connectToMongoDB } from "../config/index";


export default async (app: Application) => {
  await connectToMongoDB()
  app.use(bodyParser.json())
  app.get("/", (req: Request, res: Response) => {
    res.send('Hello world')
  });

  return app
};
