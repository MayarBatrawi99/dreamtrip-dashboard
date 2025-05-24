// models/Checklist.js
import mongoose from "mongoose";

const checklistSchema = new mongoose.Schema(
  {
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String, // e.g., "Packing", "Documents", "Preparation"
    },
  },
  { timestamps: true }
);

const Checklist = mongoose.model("Checklist", checklistSchema);

export default Checklist;
