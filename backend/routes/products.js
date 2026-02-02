import express from "express";
import Product from "../models/Product.js";
import auth from "../middleware/auth.js";

const router = express.Router();

/* GET all products */
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

/* GET single product */
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

/* ADMIN add product */
router.post("/", auth("admin"), async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json("Product added");
});

export default router;
