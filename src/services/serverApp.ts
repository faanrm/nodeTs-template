import express, { Application } from "express";
import { Request, Response } from "express";

export default async (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.send('Hello world')
  });

  return app
};
