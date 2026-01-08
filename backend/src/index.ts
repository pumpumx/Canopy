
//Boot Strap file 


import { configDotenv } from "dotenv";
import { app } from "./app"
import { env } from "./config/envConfig";
import { connectDB } from "./DB/connect";


await connectDB()
  .then(() => {
    console.log("DB Connected successfully")
  })

app.listen(env.port, () => {
  console.log("App successfully running at port: ", env.port)
})





