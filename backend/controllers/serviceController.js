const Service = require("../models/Service");

// Get all services
const getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ order: 1 });

    res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch services.",
    });
  }
};

// Get one service by ID
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid service ID.",
    });
  }
};

// Create a service
const createService = async (req, res) => {
  try {
    const { title, slug, icon, shortText, description, order } = req.body;

    if (!title || !slug || !shortText || !description) {
      return res.status(400).json({
        success: false,
        message: "Please provide title, slug, shortText, and description.",
      });
    }

    const service = await Service.create({
      title,
      slug,
      icon,
      shortText,
      description,
      order,
    });

    res.status(201).json({
      success: true,
      message: "Service created successfully.",
      service,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create service. Check required fields and slug uniqueness.",
    });
  }
};

// Update a service
const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service updated successfully.",
      service,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update service. Check the ID and submitted data.",
    });
  }
};

// Delete a service
const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service deleted successfully.",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid service ID.",
    });
  }
};

module.exports = {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
