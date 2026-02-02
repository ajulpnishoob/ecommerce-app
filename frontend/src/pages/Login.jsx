import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
    navigate("/products"); // ✅ redirect
  };

  return (
    <div className="card p-3">
      <h5>Login</h5>

      <input className="form-control mb-2"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)} />

      <input type="password" className="form-control mb-2"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)} />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
