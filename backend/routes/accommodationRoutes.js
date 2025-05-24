import express from "express";
import {
    createAccommodation,
    getAccommodationsByTrip,
    updateAccommodation,
    deleteAccommodation,
  } from "../controllers/accommodationController.js";
  import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createAccommodation);
router.route("/:tripId").get(protect, getAccommodationsByTrip);
router.route("/:id")
  .put(protect, updateAccommodation)
  .delete(protect, deleteAccommodation);

export default router;

