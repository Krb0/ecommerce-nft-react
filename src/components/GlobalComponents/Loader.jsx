import React from "react";
import loading from "../../assets/images/loader.gif";
import StyledLoader from "./StyledLoader";
const Loader = () => {
  return (
    <StyledLoader
      src={loading}
      className={"loading-img"}
      alt={"loading icon"}
    />
  );
};

export default Loader;
