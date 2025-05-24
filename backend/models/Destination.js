// models/Destination.js
import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    trip: { type: mongoose.Schema.Types.ObjectId, ref: "Trip", required: true },
    country: { type: String, required: true },
    city: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    budget: { type: Number },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Destination", destinationSchema);
