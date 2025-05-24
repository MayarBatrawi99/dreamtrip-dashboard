// models/Expense.js
import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
    {
        trip: { type: mongoose.Schema.Types.ObjectId, ref: "Trip", required: true },
        category: { type: String, required: true }, // e.g., "Food", "Transport", "Visa"
        amount: { type: Number, required: true },
        description: { type: String },
        date: { type: Date },
    },
    { timestamps: true }
);

export default mongoose.model("Expense", expenseSchema);
