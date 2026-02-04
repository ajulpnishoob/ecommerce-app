import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      {/* BRAND */}
      <Link className="navbar-brand fw-bold" to="/products">
        🛒 E-Shop
      </Link>

      {/* ☰ HAMBURGER BUTTON */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* MENU */}
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
          {/* PRODUCTS */}
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              <i className="bi bi-shop me-1"></i> Products
            </Link>
          </li>

          {/* CART */}
          <li className="nav-item">
            <Link className="nav-link position-relative" to="/cart">
              <i className="bi bi-cart-fill me-1"></i>
              Cart
              {cart.length > 0 && (
                <span className="badge bg-danger ms-1">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>

          {/* ORDERS */}
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                <i className="bi bi-receipt me-1"></i> Orders
              </Link>
            </li>
          )}

          {/* USER / AUTH */}
          {!user ? (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="bi bi-person-circle me-1"></i> Login
              </Link>
            </li>
          ) : (
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-check me-1"></i>
                {user.name}
              </span>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/orders">
                    <i className="bi bi-receipt me-2"></i> My Orders
                  </Link>
                </li>
                <li>
                  <button className="dropdown-item text-danger" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                  </button>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
