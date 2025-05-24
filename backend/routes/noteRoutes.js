import express from "express";
import {
  createNote,
  getNotesByTrip,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createNote);
router.get("/:tripId", protect, getNotesByTrip);
router
  .route("/:id")
  .put(protect, updateNote)
  .delete(protect, deleteNote);

export default router;
