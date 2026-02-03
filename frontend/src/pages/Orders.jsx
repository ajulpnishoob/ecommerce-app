import { useLocation, useNavigate } from "react-router-dom";

export default function Orders() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If user comes directly without checkout
  if (!state) {
    return (
      <div className="container mt-5">
        <h4>No order found</h4>
        <button className="btn btn-primary" onClick={() => navigate("/products")}>
          Go to Products
        </button>
      </div>
    );
  }

  const { cart, total } = state;

  return (
    <div className="container mt-4">
      <h2>Order Summary</h2>

      {cart.map((item) => (
        <div
          key={item._id}
          className="card mb-2 p-3 d-flex flex-row justify-content-between"
        >
          <div>
            <strong>{item.title}</strong>
            <p className="mb-0">
              ₹{item.price} × {item.qty}
            </p>
          </div>
          <div>
            ₹{(item.price * item.qty).toFixed(2)}
          </div>
        </div>
      ))}

      <hr />
      <h4>Total Amount: ₹{total.toFixed(2)}</h4>

      <button
        className="btn btn-success mt-3"
        onClick={() => alert("Order placed successfully")}
      >
        Place Order
      </button>
    </div>
  );
}
