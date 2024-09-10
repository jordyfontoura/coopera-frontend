import { z } from "zod";

export const envSchema = z.object({
  CMS_API_URL: z.string(),
  CMS_API_TOKEN: z.string().optional(),
});


export const env = envSchema.parse(process.env);
