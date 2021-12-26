import React from "react";
import ConfirmOrder from "./ConfirmOrder";
import CartForm from "./CartForm";
import EndOrder from "./EndOrder";
const OrderFormHandler = ({
  cart,
  orderState,
  orderDispatch,
  order,
  setOrder,
  totalPrice,
}) => {
  return (
    <>
      {!orderState.register && !orderState.confirm ? (
        <CartForm
          cart={cart}
          order={order}
          setOrder={setOrder}
          orderState={orderState}
          orderDispatch={orderDispatch}
        />
      ) : orderState.register && orderState.confirm ? (
        <EndOrder order={order} totalPrice={totalPrice} />
      ) : (
        <ConfirmOrder
          order={order}
          setOrder={setOrder}
          totalPrice={totalPrice}
          orderState={orderState}
          orderDispatch={orderDispatch}
        />
      )}
    </>
  );
};

export default OrderFormHandler;
