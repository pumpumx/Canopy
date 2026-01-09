import mongoose from "mongoose";
import { env } from "src/config/envConfig";


export const connectDB = async () => {

  mongoose.connection.on("connection", () => {
    console.log("Db connected successfully")
  })

  mongoose.connection.on("error", () => {
    throw new Error("Error while connecting to the DB")
  })

  mongoose.connection.on("disconnected", () => {
    console.log("Db disconnected")
  })

  const dbURL: string = env.db_url;
  const connection = await mongoose.connect(dbURL);
  return connection ? true : false;
}
