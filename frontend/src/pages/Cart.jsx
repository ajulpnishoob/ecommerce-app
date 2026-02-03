import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const checkout = () => {
    navigate("/orders", {
      state: { cart, total },
    });
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item._id}
          className="card mb-3 p-3 d-flex flex-row justify-content-between align-items-center"
        >
          <div>
            <strong>{item.title}</strong>
            <p className="mb-1">₹{item.price}</p>

            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => decreaseQty(item._id)}
              >
                −
              </button>

              <span>{item.qty}</span>

              <button
                className="btn btn-sm btn-secondary"
                onClick={() => increaseQty(item._id)}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeFromCart(item._id)}
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h4 className="mt-3">Total: ₹{total.toFixed(2)}</h4>

          {/* ✅ COMMON CHECKOUT BUTTON */}
          <button className="btn btn-success mt-3" onClick={checkout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
