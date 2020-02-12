const sgMail = require("@sendgrid/mail");

const msg = {
  to: "toqeer.94@gmail.com",
  from: "test@example.com",
  subject: "Test verification email",
  html: "<strong>Testing</strong>"
};

const sendMail = async () => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    return sgMail.send(msg);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = sendMail;
