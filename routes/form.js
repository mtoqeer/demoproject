const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Form = require("../models/Form");
const sgMail = require("@sendgrid/mail");

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
    sgMail.setApiKey(
      "SG.IF8NIhtoQ_uU95gy920mPA.BMgjoPukHg3z23F2v0ozm9u-Bikj2cOW2v2b2H-ktbo"
    );
    try {
      const newFormData = new Form({
        name,
        email,
        telephone,
        subject,
        message
      });

      const form = await newFormData.save();

      // using Twilio SendGrid's v3 Node.js Library
      // https://github.com/sendgrid/sendgrid-nodejs

      const msg = {
        to: "toqeer.94@gmail.com",
        from: "toqeer.94@gmail.com",
        subject: "Sending with Twilio SendGrid is Fun",
        text: "and easy to do anywhere, even with Node.js",
        html: "<strong>and easy to do anywhere, even with Node.js</strong>"
      };
      sgMail.send(msg);

      res.json(form);
    } catch (e) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

module.exports = router;
