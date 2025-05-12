import express from "express";
import { signin, signup } from "../../controller/auth";
const router: express.Router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

export default router;
