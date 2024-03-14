const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

app.use(express.json());

app.use(cookieParser());

const cors = require("cors");

dotenv.config();

// CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
);

//Routes
const appRoutes = require("./routes/appRoutes");
const userRoutes = require("./routes/userRoutes");
app.use(appRoutes);
app.use(userRoutes);

// MongoDB Connection
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error ", error);
  }
})();

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
