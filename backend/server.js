import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import tripRoutes from "./routes/tripRoutes.js";
import checklistRoutes from "./routes/checklistRoutes.js";
import accommodationRoutes from "./routes/accommodationRoutes.js";
import destinationRoutes from "./routes/destinationRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/checklists", checklistRoutes);
app.use("/api/accommodations", accommodationRoutes);
app.use("/api/destinations", destinationRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/uploads", uploadRoutes);

// Error middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () =>
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
  );
}

export default app; // 👈 This is key for testing
