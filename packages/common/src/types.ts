import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().email().min(3).max(50),
  username: z.string().min(3).max(50),
  password: z.string().min(3).max(50),
  fullname: z.string().min(3).max(50),
});

export const signinSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(3).max(50),
});

export const CreateRoomSchema = z.object({
  name: z.string().min(3).max(30),
});
