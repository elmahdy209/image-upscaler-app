import express from "express";
import cors from "cors";
import connectDB from "./config/database.js"; // Adjust the path if needed
import dotenv from "dotenv";
dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Allow all origins (or specify your frontend domain)
app.use(express.json()); // Allow JSON parsing

// Test API Route
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Example Protected Route
app.get("/api/test", (req, res) => {
  res.json({ message: "🔓 CORS is enabled & API is working!" });
});

const PORT = process.env.MONGO_PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
