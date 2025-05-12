import express, { Router } from "express";
import { middleware } from "../../middleware/middleware";
import { createRoom } from "../../controller/room";

const router: Router = express.Router();

router.post("/create-room", middleware, createRoom);

export default router;
