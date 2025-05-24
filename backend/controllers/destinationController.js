import Destination from "../models/Destination";

// @desc    Create a new destination
export const createDestination = async (req, res) => {
  try {
    const destination = await Destination.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json(destination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get destinations by trip ID
export const getDestinationsByTrip = async (req, res) => {
  try {
    const destinations = await Destination.find({
      trip: req.params.tripId,
      user: req.user._id,
    });
    res.status(200).json(destinations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc    Update a destination
export const updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination || destination.user.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: "Destination not found" });
    }

    const updated = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a destination
export const deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination || destination.user.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: "Destination not found" });
    }

    await destination.remove();
    res.json({ message: "Destination deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
