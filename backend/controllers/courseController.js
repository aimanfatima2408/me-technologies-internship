const Course = require("../models/Course");

// Get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: courses.length,
      courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch courses.",
    });
  }
};

// Get one course
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found.",
      });
    }

    res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid course ID.",
    });
  }
};

// Create a course
const createCourse = async (req, res) => {
  try {
    const {
      title,
      slug,
      tools,
      duration,
      fee,
      outline,
      image,
    } = req.body;

    if (!title || !slug || !duration || fee === undefined) {
      return res.status(400).json({
        success: false,
        message: "Please provide title, slug, duration, and fee.",
      });
    }

    const course = await Course.create({
      title,
      slug,
      tools,
      duration,
      fee,
      outline,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully.",
      course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create course. Check the data and slug uniqueness.",
    });
  }
};

// Update a course
const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully.",
      course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update course. Check the ID and submitted data.",
    });
  }
};

// Delete a course
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully.",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid course ID.",
    });
  }
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
