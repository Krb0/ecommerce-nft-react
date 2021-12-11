import React, { useContext } from "react";
import StyledCartContainer from "../StyledCart";
import CartList from "../CartList";
import clearCart from "../controllers/clearCartHandler";
import CartEmpty from "../CartEmpty";
import CartForm from "../CartForm";
import { CartContext } from "../../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

const CartListContainer = () => {
  const [cart, setCart] = useContext(CartContext);
  let totalPrice = 0;
  cart.forEach((prod) => (totalPrice += prod.item.price * prod.quantity));

  return (
    <>
      {cart.length > 0 ? (
        <StyledCartContainer>
          <button
            onClick={() => {
              clearCart(setCart);
            }}
            className="clear-btn btn-clr"
          >
            Clear List
          </button>
          <div id="table">
            <CartList cart={cart} setCart={setCart} />
          </div>
          <span className="span-total">
            Total: {totalPrice.toFixed(4)} <FontAwesomeIcon icon={faEthereum} />
          </span>
          <button className="btn-complete">Complete</button>
          <CartForm cart={cart} />
        </StyledCartContainer>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default CartListContainer;
