import { z } from "zod";

export const signUpInput = z.object({
  name: z.string().optional(),
  username: z.string().email(),
  password: z.string().min(6),
});

export type signUpInput = z.infer<typeof signUpInput>;

export const signInInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export type signInInput = z.infer<typeof signInInput>;

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export type createBlogInput = z.infer<typeof createBlogInput>;

export const editBlogInput = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});

export type editBlogInput = z.infer<typeof editBlogInput>;
