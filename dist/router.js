import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
    res.sendFile(__dirname + 'front/index.html');
});
export default router;
//# sourceMappingURL=router.js.map