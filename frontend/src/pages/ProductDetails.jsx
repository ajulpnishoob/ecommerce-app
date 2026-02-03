import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  // ✅ check if product already in cart
  const inCart = cart.find(p => p._id === product._id);

  const handleCartClick = () => {
    if (inCart) {
      navigate("/cart"); // ✅ Go to Cart
    } else {
      addToCart(product); // ✅ Add to Cart
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* IMAGE */}
        <div className="col-md-6 text-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid"
            style={{ cursor: "zoom-in", maxHeight: "400px" }}
            onClick={() => window.open(product.thumbnail, "_blank")}
          />
          <p className="text-muted mt-2">
            Click image to view full screen
          </p>
        </div>

        {/* DETAILS */}
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <p>{product.description}</p>

          <h4 className="mb-3">₹{product.price}</h4>

          <div className="d-flex gap-2">
            {/* ✅ ADD / GO TO CART BUTTON */}
            <button
              className={`btn ${
                inCart ? "btn-success" : "btn-primary"
              }`}
              onClick={handleCartClick}
            >
              {inCart ? "Go to Cart" : "Add to Cart"}
            </button>

            {/* ORDER NOW */}
            <button
              className="btn btn-warning"
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
