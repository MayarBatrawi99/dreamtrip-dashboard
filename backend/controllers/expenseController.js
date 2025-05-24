import Expense from "../models/Expense";

// @desc    Create a new expense
export const createExpense = async (req, res) => {
  try {
    const expense = await Expense.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get expenses by trip ID
export const getExpensesByTrip = async (req, res) => {
  try {
    const expenses = await Expense.find({
      trip: req.params.tripId,
      user: req.user._id,
    });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc    Update an expense
export const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense || expense.user.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: "Expense not found" });
    }

    const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete an expense
export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense || expense.user.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: "Expense not found" });
    }

    await expense.remove();
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
