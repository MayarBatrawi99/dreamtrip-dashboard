import Note from "../models/Note";

// @desc    Create a new note
export const createNote = async (req, res) => {
  try {
    const note = await Note.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get notes by trip ID
export const getNotesByTrip = async (req, res) => {
  try {
    const notes = await Note.find({
      trip: req.params.tripId,
      user: req.user._id,
    });
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc    Update a note
export const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note || note.user.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: "Note not found" });
    }

    const updated = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a note
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note || note.user.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: "Note not found" });
    }

    await note.remove();
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
