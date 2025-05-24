// models/Note.js
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        trip: { type: mongoose.Schema.Types.ObjectId, ref: "Trip", required: true },
        content: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Note", noteSchema);
