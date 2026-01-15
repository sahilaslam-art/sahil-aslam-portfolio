import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import enquiryRoutes from "./routes/enquiry.routes";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// ✅ CORS middleware - Allow requests from frontend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// connect DB
connectDB();

// routes
app.use("/api", enquiryRoutes);

// test route
app.get("/", (_req, res) => {
  res.send("Backend + DB working 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
