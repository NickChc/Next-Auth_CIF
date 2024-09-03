import { z } from "zod";

export const updateSchema = z.object({
  username: z.string().min(1, "Field is empty"),
});

export type TUpdateUserValues = z.infer<typeof updateSchema>;
