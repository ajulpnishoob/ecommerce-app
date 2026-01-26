import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.thumbnail}
            className="img-fluid"
            alt={product.title}
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>₹{product.price}</h4>
          <p>⭐ {product.rating}</p>

          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
