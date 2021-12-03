import React, { useContext } from "react";
import StyledCartContainer from "./StyledCart";
import CartList from "./CartList";
import clearCart from "./controllers/clearCartHandler";
import { CartContext } from "../GlobalComponents/CartContext";

const CartListContainer = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <StyledCartContainer>
      <div id="table">
        <div className="headers-container">
          <span>Image</span>
          <span>Name</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>

        <CartList cart={cart} setCart={setCart} />
      </div>
      <button
        onClick={() => {
          clearCart(setCart);
        }}
        className="clear-btn"
      >
        Clear List
      </button>
    </StyledCartContainer>
  );
};

export default CartListContainer;
