import React from "react";

const Cart = ({ cart, setCart }) => {
  return (
    <div>
      {cart.map((prod) => (
        <div>{prod.name}</div>
      ))}
    </div>
  );
};

export default Cart;
