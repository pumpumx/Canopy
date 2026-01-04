import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
  APP_PORT: z.coerce.number().default(3001),
})

const _env = envSchema.parse(process.env)

export const env = Object.freeze({
  port: _env.APP_PORT,
})

