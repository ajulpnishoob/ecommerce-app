import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Admin() {
  const { token } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = async () => {
    await axios.post(
      "http://localhost:5000/api/products",
      { name, price },
      { headers: { Authorization: token } }
    );
    alert("Product added");
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

