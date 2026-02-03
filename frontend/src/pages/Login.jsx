import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password }
    );

    login(res.data);
    navigate("/products"); // ✅ redirect after login
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3">Login</h3>

      <input
        className="form-control mb-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn btn-primary w-100 mb-3"
        onClick={handleLogin}
      >
        Login
      </button>

      {/* 🔗 SIGN UP LINK */}
      <p className="text-center mb-0">
        Don&apos;t have an account?{" "}
        <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}
