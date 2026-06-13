import { z } from "zod";

export const handleSchema = z
  .string()
  .trim()
  .min(3, "Handle must be at least 3 characters.")
  .max(24, "Handle must be 24 characters or fewer.")
  .regex(/^[a-zA-Z0-9_-]+$/, "Use letters, numbers, underscores, or hyphens.");

export function normalizeHandle(input: string) {
  return input.trim().toLowerCase().replace(/\s+/g, "");
}

export function validateHandle(input: string) {
  return handleSchema.safeParse(normalizeHandle(input));
}
