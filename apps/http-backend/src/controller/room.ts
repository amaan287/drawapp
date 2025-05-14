import { CreateRoomSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/prisma-client";
import { Request, Response } from "express";

export const createRoom = async (req: Request, res: Response) => {
  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({ message: "Please provide all the requested fields" });
    return;
  }
  const userId = req.userId;

  if (!userId) {
    res.status(400).json({ message: "User ID is required" });
    return;
  }
  try {
    const room = await prismaClient.room.create({
      data: {
        slug: data.data.name,
        adminId: userId,
      },
    });
    res
      .status(200)
      .json({ message: "you created room successfully", roomId: room.id });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Internal server error" });
  }
};
