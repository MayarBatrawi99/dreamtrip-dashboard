import express from "express";
import {
    createAccommodation,
    getAccommodationsByTrip,
    updateAccommodation,
    deleteAccomodation,
  } from "../controllers/checklistController.js";
  import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createAccommodation);
router.route("/:tripId").get(protect, getAccommodationsByTrip);
router.route("/:id")
  .put(protect, updateAccommodation)
  .delete(protect, deleteAccomodation);

export default router;

