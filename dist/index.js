import express from "express";
import router from "./router.js";
const port = 8080;
const app = express();
app.use(express.static('./pages/public'));
app.use('/', router);
app.listen((process.env.port || port), () => {
    console.log("App listening on port " + (process.env.port || port));
});
//# sourceMappingURL=index.js.map