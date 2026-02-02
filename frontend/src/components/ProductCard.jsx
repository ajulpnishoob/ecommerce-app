import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const inCart = cart.find(p => p._id === product._id);

  const handleClick = () => {
    if (inCart) {
      navigate("/cart"); // ✅ Go to cart
    } else {
      addToCart(product); // ✅ Add to cart
    }
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.thumbnail}
        className="card-img-top"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column">
        <h6>{product.title}</h6>
        <p className="fw-bold">₹{product.price}</p>

        <button
          className={`btn ${inCart ? "btn-success" : "btn-primary"} mt-auto`}
          onClick={handleClick}
        >
          {inCart ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
