import { CreateRoomSchema } from "@repo/common/types";
import { Request, Response } from "express";

export const createRoom = (req: Request, res: Response) => {
  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    return res.json({ message: "Please provide all the requested fields" });
  }
  res.json({ message: "you created room successfully" });
};
