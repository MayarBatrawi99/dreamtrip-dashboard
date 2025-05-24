import express from "express";
import { uploadImage, uploadHandler } from "../controllers/uploadController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, uploadImage, uploadHandler);

export default router;
