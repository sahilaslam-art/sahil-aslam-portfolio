import { Request, Response } from "express";
import Enquiry from "../models/Enquiry";
import sendMail from "../utils/sendMail";

export const createEnquiry = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("📥 POST /api/enquiry received");
    console.log("Request body:", req.body);
    
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log("❌ Validation failed - missing fields");
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    console.log("✅ Validation passed");

    // save to MongoDB
    const enquiry = await Enquiry.create({
      name,
      email,
      message
    });
    console.log("✅ Enquiry saved to DB:", enquiry);

    // 🔥 SEND EMAIL
    await sendMail(name, email, message);
    console.log("✅ Email sent successfully");

    res.status(201).json({
      success: true,
      message: "Enquiry saved & email sent successfully",
      data: enquiry
    });
  } catch (error) {
    console.error("❌ Create Enquiry Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
