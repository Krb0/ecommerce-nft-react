import React from "react";
import StyledShipping from "./StyledShipping";
import notificationHandler from "./controllers/ShippingNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faShippingFast } from "@fortawesome/free-solid-svg-icons";
const ShippingSelector = ({ setIsDeluxe, isDeluxe }) => {
  return (
    <StyledShipping>
      <div className="info-shipping-container">
        <div
          className={`info-shipping ${!isDeluxe ? "active" : ""}`}
          onClick={() => {
            setIsDeluxe(false);
            notificationHandler(false);
          }}
        >
          <span>
            Normal
            <span className="info-shipping-time">(~5hs)</span>
          </span>
          <FontAwesomeIcon icon={faTruck} />
        </div>
        <div
          className={`info-shipping ${isDeluxe ? "active" : ""}`}
          onClick={() => {
            setIsDeluxe(true);
            notificationHandler(true);
          }}
        >
          <span>
            Deluxe
            <span className="info-shipping-time">(~20min)</span>
          </span>
          <FontAwesomeIcon icon={faShippingFast} />
        </div>
      </div>
    </StyledShipping>
  );
};

export default ShippingSelector;
