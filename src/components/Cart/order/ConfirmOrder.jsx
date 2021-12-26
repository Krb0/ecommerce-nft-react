import React from "react";
import { addOrder } from "../../../Firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import StyledConfirm from "./StyledConfirm";
const ConfirmOrder = ({ order, totalPrice, orderDispatch, setOrder }) => {
  return (
    <StyledConfirm>
      <span>{order.buyer.name}</span>
      <span>{order.buyer.email}</span>
      <span className="total">
        {totalPrice.toFixed(5)}
        <FontAwesomeIcon icon={faEthereum} />
      </span>
      <button
        className="btn-complete"
        onClick={async () => {
          orderDispatch({ type: "confirm", value: true });

          const newOrder = await addOrder(order);
          setOrder({ ...order, id: newOrder });
        }}
      >
        Submit
      </button>
    </StyledConfirm>
  );
};

export default ConfirmOrder;
