import React, { useContext } from "react";
import trolleySVG from "../../assets/images/trolley.svg";
import { CartContext } from "../../Context/CartContext";

function CartWidget() {
  const [cart] = useContext(CartContext);
  return (
    <div className="cart-widget">
      <img className="cart-img" src={trolleySVG} alt="cart" />
      {cart.length > 0 ? <span>{cart.length}</span> : ""}
    </div>
  );
}

export default CartWidget;
