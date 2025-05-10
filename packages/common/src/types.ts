import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().email().min(3).max(20),
  fullname: z.string().min(3).max(20),
  username: z.string().min(3).max(20),
  password: z.string().min(3).max(20),
});

export const signinSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(3).max(20),
});

export const CreateRoomSchema = z.object({
  name: z.string().min(3).max(20),
});
