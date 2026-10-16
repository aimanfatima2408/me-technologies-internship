const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    mode: {
      type: String,
      enum: ["Online", "On-campus", "Hybrid"],
      required: true,
    },

    totalSeats: {
      type: Number,
      required: true,
      min: 1,
    },

    seatsTaken: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Batch", batchSchema);
