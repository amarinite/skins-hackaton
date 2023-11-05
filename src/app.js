const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const skinRoutes = require("./routes/skins");

const app = express();
const PORT = process.env.PORT || 1234;

// middlewares
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Mehtods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api", skinRoutes);

// routes
app.get("/", (req, res) => {});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.log(e));

app.listen(1234, () => {
  console.log("Server listening on port", PORT);
});
