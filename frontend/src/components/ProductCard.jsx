import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.thumbnail}
        className="card-img-top"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title}</h6>
        <p className="text-muted small">{product.category}</p>

        <p className="fw-bold mb-1">₹{product.price}</p>
        <p className="small">⭐ {product.rating}</p>

        <button
          className="btn btn-primary mt-auto"
          disabled={product.stock === 0}
          onClick={() => addToCart(product)}
        >

        <Link
        to={`/product/${product._id}`}
          className="btn btn-outline-secondary btn-sm"
        >
                 View
        </Link>

          {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}
