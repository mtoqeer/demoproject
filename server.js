const express = require("express");
const connectDB = require("./config/db");
const sendMail = require("./mail");

const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use("/api/form", require("./routes/form"));

// Mail Send
app.get("/sendMail", async (req, res) => {
  try {
    const sent = await sendMail();
    if (sent) {
      res.send({ message: "email sent successfully" });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

// serve static assests in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started n port ${PORT}`));
