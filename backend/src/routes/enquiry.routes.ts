import { Router } from "express";
import { createEnquiry } from "../controllers/enquiry.controller";

const router = Router();

// POST /api/enquiry
router.post("/enquiry", createEnquiry);

export default router;
