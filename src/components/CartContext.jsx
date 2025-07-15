// src/components/CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.title === item.title);
      if (existing) {
        return prev.map(i =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (title) => {
    setCart(prev => prev.filter(i => i.title !== title));
  };

  const updateQuantity = (title, qty) => {
    if (qty < 1) return;
    setCart(prev =>
      prev.map(i =>
        i.title === title ? { ...i, quantity: qty } : i
      )
    );
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
