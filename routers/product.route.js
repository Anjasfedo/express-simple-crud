const express = require("express");
const router = express.router;
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

app.get("/", getProducts);

app.get("/:id", getProduct);

app.post("/", createProduct);

app.put("/:id", updateProduct);

app.delete("/:id", deleteProduct);
