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
  isDeluxe,
}) => {
  return (
    // Managing order's view form by order state
    <>
      {!orderState.register && !orderState.confirm ? (
        <CartForm
          cart={cart}
          order={order}
          setOrder={setOrder}
          totalPrice={totalPrice}
          orderState={orderState}
          orderDispatch={orderDispatch}
          isDeluxe={isDeluxe}
        />
      ) : orderState.register && orderState.confirm ? (
        <EndOrder order={order} totalPrice={totalPrice} isDeluxe={isDeluxe} />
      ) : (
        <ConfirmOrder
          order={order}
          setOrder={setOrder}
          totalPrice={totalPrice}
          orderState={orderState}
          orderDispatch={orderDispatch}
          isDeluxe={isDeluxe}
        />
      )}
    </>
  );
};

export default OrderFormHandler;
