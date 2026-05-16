const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();


// CORS
app.use(
  cors({
    origin: "https://sample-project-71bv.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


// Middleware
app.use(express.json());


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


// Routes
app.use("/api/auth", require("./routes/authRoutes"));


// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});


// Server
app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});