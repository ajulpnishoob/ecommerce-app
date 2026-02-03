router.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    phone,             // ✅ SAVE PHONE
    password: hashedPassword,
  });

  await user.save();
  res.json({ message: "User registered successfully" });
});
