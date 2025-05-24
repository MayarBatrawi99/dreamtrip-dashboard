import express from "express";
import {
  createTrip,
  getUserTrips,
  getTripById,
  updateTrip,
  deleteTrip,
} from "../controllers/tripController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protect all trip routes
router.route("/")
  .post(protect, createTrip)
  .get(protect, getUserTrips);

router.route("/:id")
  .get(protect, getTripById)
  .put(protect, updateTrip)
  .delete(protect, deleteTrip);

export default router;
