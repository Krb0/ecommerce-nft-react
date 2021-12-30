import React, { useEffect } from "react";
import bellSound from "../../../assets/audio/bell.mp3";
import StyledEndOrder from "./StyledEndOrder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
const EndOrder = ({ order, totalPrice, isDeluxe }) => {
  useEffect(() => {
    // Playing beel sound when order is confirmed
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
        <p>
          <span>Shipping:</span> {isDeluxe ? "Deluxe" : "Normal"}
        </p>
        <p className="order-info-total">
          <span>Total:</span> {totalPrice.toFixed(4)}
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
