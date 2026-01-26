// routes/cart.js
import express from "express";
import Cart from "../models/Cart.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/add", auth(), async (req, res) => {
  const cart = await Cart.findOneAndUpdate(
    { userId: req.user.id },
    { $push: { products: req.body } },
    { upsert: true, new: true }
  );
  res.json(cart);
});

router.post("/remove", auth(), async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  cart.products = cart.products.filter(p => p._id !== req.body._id);
  await cart.save();
  res.json(cart);
});

export default router;
