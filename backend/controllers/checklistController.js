import Checklist from "../models/ChecklistItem.js";

// @desc    Create a checklist item
// @route   POST /api/checklists
// @access  Private

export const createChecklist = async (req, res) => {
    try {
        const item = await Checklist.create({
            user: req.user._id,
            trip: req.body.trip,
            item: req.body.item,
            completed: false,
            category: req.body.category
        });
        res.status(201).json(item)

    } catch (err) {
        res.status(500).json({ message: "Failed to create checklist item", error: error.message });
    }
};
// @desc    Get checklist for a trip
// @route   GET /api/checklists/:tripId
// @access  Private
export const getChecklistByTrip = async (req, res) => {
    try {
        const checklist = await Checklist.find({ user: req.user._id, trip: req.params.tripId });
        res.json(checklist);

    } catch (err) {
        res.status(500).json({ message: "Failed to fetch checklist", error: error.messge });
    }
};
// @desc    Update checklist item
// @route   PUT /api/checklists/:id
// @access  Private
export const updateChecklist = async (req, res) => {
    try {
        const checklist = await Checklist.findById(req.params._id);
        if (checklist && checklist.user.toString() === req.user._id.toString()) {
            checklist.item = req.body.item || checklist.item;
            checklist.category = req.body.category || checklist.category;
            checklist.completed = req.body.completed ?? checklist.completed;
            const update = await checklist.save();
            res.json(checklist);
        } else {
            res.status(404).json({ message: " Checklist not found" });
        }

    } catch (err) {
        res.status(500).json({ message: "Failed to update checklist", error: message.error });
    }

};
// @desc    Delete checklist item
// @route   DELETE /api/checklists/:id
// @access  Private
export const deleteChecklist = async (req, res) => {
    try {
      const item = await Checklist.findById(req.params.id);
      if (item && item.user.toString() === req.user._id.toString()) {
        await item.remove();
        res.json({ message: "Checklist item deleted" });
      } else {
        res.status(404).json({ message: "Checklist item not found or unauthorized" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to delete checklist", error: error.message });
    }
  };

  