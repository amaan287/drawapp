import express from "express";
import cors from "cors";
import v1Routes from "./routes/v1/index";
import { prismaClient } from "@repo/db/prisma-client";

const app = express();
app.use(express.json());
app.use(cors());
prismaClient;
app.use("/api/v1", v1Routes);

const port = 4000;
app.listen(port, () => {
  console.log(`server is running on http:localhost:${port}`);
});
