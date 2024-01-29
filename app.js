const express = require('express')
require("dotenv").config()
const Port = process.env.PORT || 9669;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("connection failed", err);
  });

const server = app.listen(Port, (port) => {
  console.log("Server is running on port:", Port);
});