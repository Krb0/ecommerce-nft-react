import React, { useEffect } from "react";
import bellSound from "../../../assets/audio/bell.mp3";
import StyledEndOrder from "./StyledEndOrder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
const EndOrder = ({ order, totalPrice }) => {
  useEffect(() => {
    const audio = new Audio(bellSound);
    audio.play();
  }, []);
  return (
    <StyledEndOrder>
      <h3>Order Created!</h3>
      <div className="order-info">
        <p>
          <span>Name:</span> {order.buyer.name}
        </p>
        <p>
          <span>Email:</span> {order.buyer.email}
        </p>
        <p className="order-info-total">
          <span>Total:</span> {totalPrice.toFixed(5)}
          <FontAwesomeIcon icon={faEthereum} />
        </p>
        <p>
          <span>Order N°:</span> {order.id}
        </p>
      </div>
    </StyledEndOrder>
  );
};

export default EndOrder;
