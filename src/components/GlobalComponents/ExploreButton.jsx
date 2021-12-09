import React from "react";
import StyledExploreButton from "./StyledExploreButton";
const ExploreButton = ({ active }) => {
  return (
    <StyledExploreButton to="/products">
      <button className={`btn-explore ${active ? "active" : ""}`}>
        Explore
      </button>
    </StyledExploreButton>
  );
};

export default ExploreButton;
