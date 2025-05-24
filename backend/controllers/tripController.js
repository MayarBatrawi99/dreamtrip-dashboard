// Handles core Trip logic (creating, retrieving, updating, deleting trips)

import Trip from "../models/Trip.js";

// @desc    Create a new trip
// @route   POST /api/trips
// @access  Private
export const createTrip = async (req, res) => {
    try {
        const trip = await Trip.create({ ...req.body, user: req.user._id });
        res.status(200).json(trip)

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Get all trips for logged-in user
// @route   GET /api/trips
// @access  Private
export const getUserTrips = async (req, res) => {
    try {
        const trips = await Trip.find({ user: req.user._id });
        res.json(trips);

    } catch (err) {
        res.status(500).json({ message: "Failed to fetch trips", error: error.message });
    }

};

// @desc    Get a single trip by ID
// @route   GET /api/trips/:id
// @access  Private
export const getTripById = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id );
        if (trip && trip.user.toString() == req.user._id.toString()) {
            res.json(trip);
        } else {
            res.status(404).json({ message: "Trip not found" });
        }

    } catch (err) {
        res.status(500).json({ message: "Error fetching trip", error: error.message });
    }
};

// @desc    Update a trip
// @route   PUT /api/trips/:id
// @access  Private
export const updateTrip = async (req, res) => {
    try {
        const trip = await Trip.findById( req.params.id );
        if (trip && trip.user.toString() === req.user._id.toString()) {
            trip.title = title || trip.title;
            trip.startDate = startDate || trip.startDate;
            trip.endDate = endDate || trip.endDate;
            trip.totalBudget = totalBudget || trip.totalBudget;
            const updateTrip=await trip.save();
            res.status(200).json({ message: "Trip not found or unauthorized" });

        }

    } catch (err) {
        res.status(500).json({ message: "Error updating trip", error: error.message })
    }

};
// @desc    Delete a trip
// @route   DELETE /api/trips/:id
// @access  Private
export const deleteTrip = async (req, res) => {
    try {
      const trip = await Trip.findById(req.params.id);
  
      if (trip && trip.user.toString() === req.user._id.toString()) {
        await trip.remove();
        res.json({ message: "Trip deleted" });
      } else {
        res.status(404).json({ message: "Trip not found or unauthorized" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting trip", error: error.message });
    }
  };

