const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
require("dotenv").config();

app.use(express.json());

const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Run on http://localhost:3000/");
});
