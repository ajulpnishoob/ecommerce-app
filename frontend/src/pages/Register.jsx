import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const register = async () => {
    await axios.post("http://localhost:5000/api/auth/register", form);
    alert("Registered successfully");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Register</h3>

      <input className="form-control mb-2" placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input className="form-control mb-2" placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <input type="password" className="form-control mb-2" placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })} />

      <select className="form-control mb-3"
        onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button className="btn btn-primary w-100" onClick={register}>
        Register
      </button>
    </div>
  );
}
