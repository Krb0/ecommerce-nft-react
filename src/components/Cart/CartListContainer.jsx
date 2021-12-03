import React from "react";
import StyledCartContainer from "./StyledCartContainer";
import CartList from "./CartList";
const CartListContainer = () => {
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

        <CartList />
      </div>
    </StyledCartContainer>
  );
};

export default CartListContainer;
