
//Boot Strap file 


import { configDotenv } from "dotenv";
import { app } from "./app"
import { env } from "./config/envConfig";


app.listen(env.port, () => {
  console.log("App successfully running at port: ", env.port)
})





