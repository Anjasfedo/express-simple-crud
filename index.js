const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app,use("/api/products", productRoutes)

app.listen(3000, () => {
  console.log("Run on http://localhost:3000/");
});
