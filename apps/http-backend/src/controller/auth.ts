import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateUserSchema, signinSchema } from "@repo/common/types";
import jwt from "jsonwebtoken";
import { hash } from "bcrypt";
import { prismaClient } from "@repo/db/prisma-client";
import { Request, Response } from "express";

export const signup = async (req: Request, res: Response): Promise<void> => {
  const data = CreateUserSchema.safeParse(req.body);
  console.log(req.body);
  console.log(data);
  if (!data.success) {
    res.json({ message: "Please provide all the requested fields" });
    return;
  }
  try {
    if (!data.data?.password) {
      res.status(500).json({ message: "Please provide a password" });
      return;
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
    if (!user) {
      res
        .status(500)
        .json({ message: "Internal server error please try again later" });
      return;
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET);
    res
      .status(200)
      .json({ message: "Signup successfull", user: user, token: token });
    return;
  } catch (e) {
    res.json({ message: "Internal server error" });
    return;
  }
};

export const signin = async (req: Request, res: Response): Promise<void> => {
  const data = signinSchema.safeParse(req.body);
  if (!data.success) {
    res.json({ message: "Please provide all the requested fields" });
    return;
  }
  const userId = 1;
  const token = jwt.sign({ id: userId }, JWT_SECRET);
  res.json({ token });
};
