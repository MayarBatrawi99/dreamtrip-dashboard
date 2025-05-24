import Accommodation from "../models/Accommodation.js";

// @desc    Create an accommodation
// @route   POST /api/accommodation
// @access  Private

export const createAccommodation = async (req,res)=>{
    try{
        const accommodation = await Accommodation.create({
            user: req.user._id,
            trip: req.body.trip,
            placeName: req.body.placeName,
            address: req.body.address,
            cost: req.body.cost,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
        });
        res.status(201).json(accommodation);

    } catch (err) {
        res.status(500).json({message:"Failed to create an accommodation",error:error.message});
    }
};

// @desc    Get accommodation for a trip
// @route   GET /api/accommodations/:tripId
// @access  Private

export const getAccommodationsByTrip= async(req,res)=>{
    try{
        const list = await Accommodation.find({trip:req.params.tripId,user:req.user._id});
        res.json(list);

    } catch(err) {
        res.status(500).json({message:"Error Fetching Accommodations",error:err.message});
    }

};

// @desc    Update accommodation
// @route   PUT /api/accommodations/:id
// @access  Private
export const updateAccommodation = async (req, res) => {
    try {
      const updated = await Accommodation.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updated) return res.status(404).json({ message: 'Not found' });
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // @desc    Delete accommodation
// @route   DELETE /api/accommodations/:id
// @access  Private
  export const deleteAccommodation = async (req, res) => {
    try {
      const deleted = await Accommodation.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'Not found' });
      res.status(200).json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


