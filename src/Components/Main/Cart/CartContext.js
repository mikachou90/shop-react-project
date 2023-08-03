import { createContext, useState } from "react";
import CartProductData from "./CartProductData";

const CartContext = createContext();

export function CartProvider({ children }) {
  //將initial資料帶入
  const [currentItems, setCurrentItems] = useState(CartProductData);

  const totalValuesItems = currentItems.reduce((acc, val) => {
    return acc.quantity * acc.price + val.quantity * val.price;
  });

  const value = {
    currentItems,
    setCurrentItems,
    totalValuesItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
