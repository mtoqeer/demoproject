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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, telephone, subject, message } = req.body;

    try {
      const newFormData = new Form({
        name,
        email,
        telephone,
        subject,
        message
      });

      const form = await newFormData.save();

      res.json(form);
    } catch (e) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

module.exports = router;
