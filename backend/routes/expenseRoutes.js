import express from "express";
import {
  createExpense,
  getExpensesByTrip,
  updateExpense,
  deleteExpense,
} from "../controllers/expensesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createExpense);
router.get("/:tripId", protect, getExpensesByTrip);
router
  .route("/:id")
  .put(protect, updateExpense)
  .delete(protect, deleteExpense);

export default router;
