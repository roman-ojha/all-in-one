import express, { Response, Request } from "express";
const router = express.Router();
router.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

export default router;
