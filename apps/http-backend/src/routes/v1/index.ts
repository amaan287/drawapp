import express from "express";
import authRoutes from "./auth.routes";
import roomRoutes from "./room.routes";
const router: express.Router = express.Router();
router.use("/", authRoutes);
router.use("/", roomRoutes);

export default router;
