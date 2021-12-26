import React from "react";
import StyledNotMatch from "./StyledNotMatch";
import notFound from "../../assets/images/not-found.png";
import { Link } from "react-router-dom";
const NotMatch = () => {
  return (
    <StyledNotMatch>
      <Link to="/">
        <img src={notFound} alt="robot"></img>
        <h3>Back to home</h3>
      </Link>
    </StyledNotMatch>
  );
};

export default NotMatch;
