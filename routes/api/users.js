const express = require("express");
const router = express.Router();

// Item Model
const User = require("../../models/User");

// @route   GET api/users
// @desc    Get All users
// @access  Public
router.get("/", (req, res) => {
  Todo.find()
    .sort({ date: -1 })
    .then(todo => res.json(todo));
});

module.exports = router;
