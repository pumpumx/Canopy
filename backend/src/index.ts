
//Boot Strap file 


import { configDotenv } from "dotenv";
import { app } from "./app"
import { env } from "./config/envConfig";
import { connectDB } from "./DB/connect";


await connectDB()
  .then(() => {
    console.log("Database Connected Successfully")
  })

app.listen(env.port, "0.0.0.0", () => {
  console.log("App successfully running at port: ", env.port)
})





