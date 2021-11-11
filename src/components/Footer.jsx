import React from "react";
import StyledFooter from "../styles/StyledFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <StyledFooter>
      <h2>Connect with Us.</h2>
      <ul>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
      </ul>
    </StyledFooter>
  );
};

export default Footer;
