import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">E-Shop</Link>

      <div className="d-flex gap-2">
        <Link className="btn btn-outline-light" to="/products">Products</Link>
        <Link className="btn btn-outline-light" to="/cart">
          Cart ({cart.length})
        </Link>

        {user ? (
          <>
            <span className="text-light mt-2">
              {user.name}
            </span>
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link className="btn btn-outline-light" to="/login">
            Login 
          </Link>
        )}
      </div>
    </nav>
  );
}
