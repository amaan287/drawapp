import express from "express";
import { createRoom } from "../../controller/room";
import { middleware } from "../../middleware/middleware";
const router: express.Router = express.Router();
router.post("/create-room", middleware, createRoom);
export default router;
