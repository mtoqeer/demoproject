const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Form = require("../models/Form");

// @route POST api/form
// @desc Submit Form Data into DB
// @access Public
router.post(
  "/",
  [
    check("name", "Please add name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("message", "Please add message")
      .not()
      .isEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("passed");
  }
);

module.exports = router;
