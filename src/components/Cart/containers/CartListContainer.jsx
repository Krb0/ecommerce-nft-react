import React, { useContext, useState, useReducer, useEffect } from "react";
import StyledCartContainer from "../StyledCart";
import CartList from "../CartList";
import clearCart from "../controllers/clearCartHandler";
import CartEmpty from "../CartEmpty";
import OrderFormHandler from "../order/OrderFormHandler";
import notificationHandler from "../controllers/notificationHandler";
import OrderProgression from "../order/OrderProgression";

import { CartContext } from "../../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import Modal from "../../Modal/Modal";

const reducer = (state, action) => {
  let temporal = state;
  switch (action.type) {
    case "register":
      temporal.register = action.value;
      temporal.registerArrow = action.value;
      return { ...temporal };
    case "confirm":
      temporal.confirm = true;
      temporal.confirmArrow = true;
      return { ...temporal };
    case "order":
      temporal.order = action.value;
      return { ...temporal };
    default:
      throw new Error();
  }
};

const CartListContainer = () => {
  const [cart, setCart] = useContext(CartContext);
  const [isModal, setIsModal] = useState(false);
  const [order, setOrder] = useState({});
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [orderState, orderDispatch] = useReducer(reducer, {
    register: false,
    registerArrow: false,
    confirm: false,
    confirmArrow: false,
    order: false,
  });
  const onHideCart = () => {
    setIsModal(false);
  };
  useEffect(() => {
    const price = cart.reduce(
      (acc, prod) => acc + prod.item.price * prod.quantity,
      0.0
    );
    setTotalPrice(price);
  }, [cart]);
  return (
    <>
      {isModal ? (
        <Modal onHideCart={onHideCart}>
          <OrderProgression orderState={orderState} />
          <OrderFormHandler
            orderState={orderState}
            cart={cart}
            orderDispatch={orderDispatch}
            order={order}
            setOrder={setOrder}
            totalPrice={totalPrice}
          />
        </Modal>
      ) : (
        ""
      )}
      {cart.length > 0 ? (
        <StyledCartContainer>
          <button
            onClick={() => {
              clearCart(setCart);
              notificationHandler(true);
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
          <button className="btn-complete" onClick={() => setIsModal(true)}>
            Complete
          </button>
        </StyledCartContainer>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default CartListContainer;
