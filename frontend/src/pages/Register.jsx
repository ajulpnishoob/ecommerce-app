import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const submit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      alert(res.data.message); // ✅ SUCCESS MESSAGE

      // ✅ CLEAR FORM
      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
      });

      // ✅ REDIRECT TO LOGIN
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3">Register</h3>

      <input
        className="form-control mb-2"
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button className="btn btn-success w-100 mb-3" onClick={submit}>
        Register
      </button>

      <p className="text-center mb-0">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
