const express = require("express");
const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
} = require("../controllers/adminController");

const protect = require("../middleware/authMiddleware");

// Register an admin
router.post("/register", registerAdmin);

// Login an admin
router.post("/login", loginAdmin);

// Protected route
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Access granted! Admin authentication successful.",
    admin: req.admin,
  });
});

module.exports = router;
