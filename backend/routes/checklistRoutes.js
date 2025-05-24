import express from "express";
import {
  createChecklist,
  getChecklistByTrip,
  updateChecklist,
  deleteChecklist,
} from "../controllers/checklistController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createChecklist);
router.route("/:tripId").get(protect, getChecklistByTrip);
router.route("/:id")
  .put(protect, updateChecklist)
  .delete(protect, deleteChecklist);

export default router;
