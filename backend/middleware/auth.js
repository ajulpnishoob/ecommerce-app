// middleware/auth.js
import jwt from "jsonwebtoken";

const auth = (role = null) => {
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json("Not authenticated");

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json("Invalid token");
      if (role && user.role !== role)
        return res.status(403).json("Access denied");

      req.user = user;
      next();
    });
  };
};

export default auth;
