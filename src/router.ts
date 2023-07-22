import express, { Router, Request, Response } from "express";
import path from "path";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.sendFile(path.resolve('./pages/index.html'));
});

export default router;