import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exists = cart.find(p => p._id === product._id);

    if (exists) {
      setCart(
        cart.map(p =>
          p._id === product._id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map(p =>
        p._id === id ? { ...p, qty: p.qty + 1 } : p
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map(p =>
          p._id === id ? { ...p, qty: p.qty - 1 } : p
        )
        .filter(p => p.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(p => p._id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
  