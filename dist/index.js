import express from "express";
import path from "path";
const port = 8080;
const app = express();
app.use(express.static(path.resolve('./src/app/dist')));
//app.use('/build/', express.static('./node_modules/three/build'));
//app.use('/jsm/', express.static('./node_modules/three/examples/jsm'));
//app.use('/', router);
app.get('/api', (req, res) => {
    res.send(JSON.parse(JSON.stringify({ greeting: "Hello from API!" })));
});
app.get('*', (_, res) => {
    res.sendFile(path.resolve('./src/app/dist/index.html'));
});
app.listen((process.env.PORT || port), () => {
    console.log(`Server live on PORT ${(process.env.PORT || port)}...`);
});
//# sourceMappingURL=index.js.map