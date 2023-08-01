import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.sendFile(__dirname + 'front/index.html');
});

export default router;