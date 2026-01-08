"use client";

import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const addItem = (product) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: (copy[idx].qty || 1) + 1 };
        return copy;
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setOpen(true);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const setQty = (id, qty) => {
    const q = Math.max(1, Number(qty || 1));
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: q } : p))
    );
  };

  const clear = () => setItems([]);

  const count = useMemo(
    () => items.reduce((sum, it) => sum + (it.qty || 1), 0),
    [items]
  );

  const total = useMemo(
    () => items.reduce((sum, it) => sum + (it.price || 0) * (it.qty || 1), 0),
    [items]
  );

  const value = {
    items,
    addItem,
    removeItem,
    setQty,
    clear,
    count,
    total,
    open,
    setOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
