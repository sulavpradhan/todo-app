import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("unable to connect to db", error);
    process.exit(1);
  }
};

export default connectDB;
