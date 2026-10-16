const Batch = require("../models/Batch");

// Get all batches
const getBatches = async (req, res) => {
  try {
    const batches = await Batch.find()
      .populate("course", "title slug")
      .sort({ startDate: 1 });

    res.status(200).json({
      success: true,
      count: batches.length,
      batches,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch batches.",
    });
  }
};

// Get one batch
const getBatchById = async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id)
      .populate("course", "title slug");

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found.",
      });
    }

    res.status(200).json({
      success: true,
      batch,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid batch ID.",
    });
  }
};

// Create a batch
const createBatch = async (req, res) => {
  try {
    const {
      course,
      startDate,
      mode,
      totalSeats,
      seatsTaken,
    } = req.body;

    if (!course || !startDate || !mode || totalSeats === undefined) {
      return res.status(400).json({
        success: false,
        message: "Please provide course, startDate, mode, and totalSeats.",
      });
    }

    const batch = await Batch.create({
      course,
      startDate,
      mode,
      totalSeats,
      seatsTaken,
    });

    res.status(201).json({
      success: true,
      message: "Batch created successfully.",
      batch,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create batch. Check the course ID and submitted data.",
    });
  }
};

// Update a batch
const updateBatch = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate("course", "title slug");

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Batch updated successfully.",
      batch,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update batch. Check the ID and submitted data.",
    });
  }
};

// Delete a batch
const deleteBatch = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.id);

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Batch deleted successfully.",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid batch ID.",
    });
  }
};

module.exports = {
  getBatches,
  getBatchById,
  createBatch,
  updateBatch,
  deleteBatch,
};
