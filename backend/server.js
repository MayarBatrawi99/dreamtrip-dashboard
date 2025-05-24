import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Route imports
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import tripRoutes from "./routes/tripRoutes.js";
import checklistRoutes from "./routes/checklistRoutes.js";
import accommodationRoutes from "./routes/accommodationRoutes.js";
import destinationRoutes from "./routes/destinationRoutes.js";
import expensesRoutes from "./routes/expensesRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

// Config .env
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware for handling JSON, cookies, and CORS
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/checklist", checklistRoutes);
app.use("/api/accommodation", accommodationRoutes);
app.use("/api/destination", destinationRoutes);
app.use("/api/expenses", expensesRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/upload", uploadRoutes);

// Custom error handlers
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
