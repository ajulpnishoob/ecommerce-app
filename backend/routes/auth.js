import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

/* Register */
router.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role || "user", // admin / user
  });

  await user.save();
  res.json("User registered");
});

/* Login */
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json("User not found");

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(401).json("Invalid password");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({
    token,
    role: user.role,
    name: user.name,
  });
});

export default router;
