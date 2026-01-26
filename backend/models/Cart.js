// models/Cart.js
import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  userId: String,
  products: Array
});

export default mongoose.model("Cart", CartSchema);
