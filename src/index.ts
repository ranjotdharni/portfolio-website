import express, { Express, Request, Response } from "express";
import router from "./router.js";
const port = 8080;

const app: Express = express();

app.use(express.static('./pages/public'));
app.use('/', router);

app.listen((process.env.port || port), () => {
    console.log("App listening on port " + (process.env.port || port));
});