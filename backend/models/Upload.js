// models/Upload.js
import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
    {
        trip: { type: mongoose.Schema.Types.ObjectId, ref: "Trip", required: true },
        filename: { type: String, required: true },
        url: { type: String, required: true },
        fileType: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model("Upload", uploadSchema);
