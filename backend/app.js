const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const salesRoutes = require("./routes/salesRoutes");
const cors = require('cors')
const connectDB = require("./config/db");
require("dotenv").config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/sales", salesRoutes);

// MongoDB Connection
connectDB();

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
