const Product = require("../models/product.model");

class ProductController {
  async getProducts(req, res) {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getProduct(req, res) {
    try {
      const { id } = req.params;

      const product = await Product.findById(id);

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createProduct(req, res) {
    try {
      const product = await Product.create(req.body);

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const { id } = req.params;

      const product = await Product.findByIdAndUpdate(id, req.body);

      if (!product) {
        return res.status(404).json({ message: "Not found" });
      }

      const updatedProduct = await Product.findById(id);

      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params;

      const product = await Product.findByIdAndDelete(id);

      if (!product) {
        return res.status(404).json({ message: "Not found" });
      }

      res.status(200).json({ message: "Deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = ProductController;
