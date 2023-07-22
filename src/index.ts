import express, { Express, Request, Response } from "express";
const port = 8080;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen((process.env.port || port), () => {
    console.log("App listening on port " + (process.env.port || port));
});