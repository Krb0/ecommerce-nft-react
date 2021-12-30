import React from "react";
import StyledOrderProgression from "./StyledOrderProgression";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faAddressBook,
  faAddressCard,
  faBell,
} from "@fortawesome/free-regular-svg-icons";
const OrderProgression = ({ orderState }) => {
  // Coloring order's progress icon by order's state
  return (
    <StyledOrderProgression>
      <FontAwesomeIcon
        icon={faAddressBook}
        color={orderState.register ? "rgba(51,187,221)" : "gray"}
      />
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        className="order-arrow"
        color={orderState.registerArrow ? "rgba(51,187,221)" : "gray"}
      />
      <FontAwesomeIcon
        icon={faAddressCard}
        color={orderState.confirm ? "rgba(51,187,221)" : "gray"}
      />
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        className="order-arrow"
        color={orderState.confirmArrow ? "rgba(51,187,221)" : "gray"}
      />
      <FontAwesomeIcon
        icon={faBell}
        color={orderState.confirm ? "#F2A04B" : "gray"}
      />
    </StyledOrderProgression>
  );
};

export default OrderProgression;
