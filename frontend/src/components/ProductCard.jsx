import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const inCart = cart.find(p => p._id === product._id);

  const handleCartClick = () => {
    if (inCart) {
      navigate("/cart");
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title}</h6>
        <p className="fw-bold">₹{product.price}</p>

        <div className="d-flex gap-2 mt-auto">
          {/* VIEW BUTTON – ONLY NAVIGATION */}
          <Link
            to={`/product/${product._id}`}
            className="btn btn-outline-secondary btn-sm w-50"
          >
            View
          </Link>

          {/* CART BUTTON */}
          <button
            className={`btn btn-sm w-50 ${
              inCart ? "btn-success" : "btn-primary"
            }`}
            onClick={handleCartClick}
          >
            {inCart ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
