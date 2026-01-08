import mongoose from "mongoose";
import { env } from "src/config/envConfig";


export const connectDB = async () => {
  const dbURL: string = env.db_url;
  console.log("db URl: ", dbURL);
  const connection = await mongoose.connect(dbURL);

  return connection ? true : false;
}
