import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
  APP_PORT: z.coerce.number().default(3001),
  MONGO_URL: z.coerce.string().default(""),
})

const _env = envSchema.parse(process.env)

export const env = Object.freeze({
  port: _env.APP_PORT,
  db_url: _env.MONGO_URL
})
