import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function AddProduct() {
  const { token } = useContext(AuthContext);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    thumbnail: ""
  });

  const submit = async () => {
    await axios.post(
      "http://localhost:5000/api/products",
      product,
      { headers: { Authorization: token } }
    );
    alert("Product added");
  };

  return (
    <div className="container mt-4">
      <h3>Add Product</h3>

      <input className="form-control mb-2" placeholder="Title"
        onChange={e => setProduct({ ...product, title: e.target.value })} />

      <input className="form-control mb-2" placeholder="Price"
        onChange={e => setProduct({ ...product, price: e.target.value })} />

      <textarea className="form-control mb-2" placeholder="Description"
        onChange={e => setProduct({ ...product, description: e.target.value })} />

      <input className="form-control mb-3" placeholder="Image URL"
        onChange={e => setProduct({ ...product, thumbnail: e.target.value })} />

      <button className="btn btn-success" onClick={submit}>
        Save Product
      </button>
    </div>
  );
}
