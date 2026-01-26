import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Products</h2>

      <div className="row g-4">
        {products.map(p => (
          <div key={p._id} className="col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
