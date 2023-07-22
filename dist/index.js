import express from "express";
const port = 8080;
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen((process.env.port || port), () => {
    console.log("App listening on port " + (process.env.port || port));
});
//# sourceMappingURL=index.js.map