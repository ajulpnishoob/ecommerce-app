import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import cartRoutes from "./routes/cart.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => {
  console.log("API is running...");
  res.send("API is running...");
});

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port http://localhost:5000"));
  })
  .catch(err => console.log(err));
