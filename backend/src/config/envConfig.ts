import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
  APP_PORT: z.coerce.number().default(3001),
  MONGO_URL: z.coerce.string().default(""),
  NODE_PROD: z.coerce.string().default("DEV"),
  ACCESS_TOKEN_KEY: z.coerce.string().default("")
})

const _env = envSchema.parse(process.env)

export const env = Object.freeze({
  port: _env.APP_PORT,
  db_url: _env.MONGO_URL,
  node_prod: _env.NODE_PROD,
  access_token_key: _env.ACCESS_TOKEN_KEY
})
