import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoUri = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoUri); 

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    throw new Error('Failed to connect to MongoDB');
  }
};

export default connectDB;
