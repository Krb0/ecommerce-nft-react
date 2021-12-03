import React, { useContext } from "react";
import { CartContext } from "../GlobalComponents/CartContext";
import CartItem from "./CartItem";
const CartList = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className="info-container">
      {cart.map((prod) => (
        <CartItem product={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default CartList;
