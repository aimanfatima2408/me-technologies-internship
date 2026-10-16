const express = require("express");
const router = express.Router();

const {
  getBatches,
  getBatchById,
  createBatch,
  updateBatch,
  deleteBatch,
} = require("../controllers/batchController");

const protect = require("../middleware/authMiddleware");

// Public routes
router.get("/", getBatches);
router.get("/:id", getBatchById);

// Admin-only routes
router.post("/", protect, createBatch);
router.put("/:id", protect, updateBatch);
router.delete("/:id", protect, deleteBatch);

module.exports = router;
