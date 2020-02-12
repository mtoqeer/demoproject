const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Welcome to the demo form" }));

app.use("/api/form", require("./routes/form"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started n port ${PORT}`));
