import express, { Express } from "express";
import path from "path";
const port = 8080;

const app: Express = express();

app.use(express.static(path.resolve('./src/app/dist')));

app.get('*', (_, res) => {
    res.sendFile(path.resolve('./src/app/dist/index.html'));
});

app.listen((process.env.PORT || port), () => {
    console.log(`Server live on PORT ${(process.env.PORT || port)}...`);
});