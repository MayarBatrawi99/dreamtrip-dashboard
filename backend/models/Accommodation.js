// models/Accommodation.js
import mongoose from "mongoose";

const accommodationSchema = new mongoose.Schema(
    {
        destination: { type: mongoose.Schema.Types.ObjectId, ref: "Destination", required: true },
        name: { type: String, required: true },
        address: { type: String },
        checkIn: { type: Date },
        checkOut: { type: Date },
        price: { type: Number },
        notes: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model("Accommodation", accommodationSchema);
