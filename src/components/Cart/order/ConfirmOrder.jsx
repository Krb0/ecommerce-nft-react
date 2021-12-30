import React from "react";
import { addOrder } from "../../../Firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import StyledConfirm from "./StyledConfirm";
const ConfirmOrder = ({
  order,
  totalPrice,
  orderDispatch,
  setOrder,
  isDeluxe,
}) => {
  return (
    <StyledConfirm>
      <span>{order.buyer.name}</span>
      <span>{order.buyer.email}</span>
      <span>{isDeluxe ? "Deluxe" : "Normal"} Shipping</span>
      <span className="total">
        {totalPrice.toFixed(4)}
        <FontAwesomeIcon icon={faEthereum} />
      </span>
      <div>
        <button
          className="btn-back"
          onClick={async () => {
            orderDispatch({ type: "register", value: false });
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> <span>Back</span>
        </button>
        <button
          onClick={async () => {
            const newOrderID = await addOrder({ ...order, delivery: isDeluxe });
            setOrder({
              ...order,
              id: newOrderID,
              delivery: isDeluxe,
            });
            orderDispatch({ type: "confirm", value: true });
          }}
        >
          Confirm
        </button>
      </div>
    </StyledConfirm>
  );
};

export default ConfirmOrder;
