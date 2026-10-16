const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    tools: {
      type: [String],
      default: [],
    },

    duration: {
      type: String,
      required: true,
    },

    fee: {
      type: Number,
      required: true,
    },

    outline: {
      type: [String],
      default: [],
    },

    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
