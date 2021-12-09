import React from "react";
import StyledCartEmpty from "./StyledCartEmpty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrownOpen } from "@fortawesome/free-regular-svg-icons";
import ExploreButton from "../GlobalComponents/ExploreButton";
const CartEmpty = () => {
  return (
    <StyledCartEmpty>
      <FontAwesomeIcon icon={faFrownOpen} />
      <span>Your cart is empty</span>
      <ExploreButton active={true} />
    </StyledCartEmpty>
  );
};

export default CartEmpty;
