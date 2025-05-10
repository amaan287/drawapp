import { Request, Response } from "express";
import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateUserSchema, signinSchema } from "@repo/common/types";
import jwt from "jsonwebtoken";
import { hash } from "bcrypt";
import { prismaClient } from "@repo/db/prisma-client";
export const signup = async (req: Request, res: Response) => {
  const data = CreateUserSchema.safeParse(req.body);
  try {
    if (!data.data?.password) {
      return res.status(500).json({ message: "Please provide a password" });
    }
    const encryptedPassword = await hash(data.data?.password, 10);

    const user = await prismaClient.user.create({
      data: {
        email: data.data?.email,
        username: data.data?.username,
        fullname: data.data?.fullname,
        password: encryptedPassword,
      },
    });
  } catch (e) {
    res.json({ message: "Internal server error" });
  }
  if (!data.success) {
    return res.json({ message: "Please provide all the requested fields" });
  }

  return;
};

export const signin = async (req: Request, res: Response) => {
  const data = signinSchema.safeParse(req.body);
  if (!data.success) {
    return res.json({ message: "Please provide all the requested fields" });
  }
  const userId = 1;
  jwt.sign(userId, { JWT_SECRET });
};
