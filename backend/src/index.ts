
//Boot Strap file 


import { configDotenv } from "dotenv";
import { app } from "./app"
import { env } from "./config/envConfig";
import { connectDB } from "./DB/connect";
import { Redis } from "./utils/redis/redisInstantiation";


await connectDB()
  .then(() => {
    console.log("Database Connected Successfully")
  })

app.listen(env.port, "0.0.0.0", () => {
  console.log("App successfully running at port: ", env.port)
})


await Redis.connectRedis()
  .then(() => {
    console.log("Redis connected successfully at port 6379")
  })
  .catch((error) => {
    throw new Error("Redis connection Failed")
  })
