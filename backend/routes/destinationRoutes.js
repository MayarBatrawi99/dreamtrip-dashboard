import express from "express";
import {
  createDestination,
  getDestinationsByTrip,
  updateDestination,
  deleteDestination,
} from "../controllers/destinationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createDestination);
router.get("/:tripId", protect, getDestinationsByTrip);
router
  .route("/:id")
  .put(protect, updateDestination)
  .delete(protect, deleteDestination);

export default router;
