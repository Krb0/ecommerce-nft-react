import React from "react";
import { Link, useLocation } from "react-router-dom";
import CartWidget from "./CartWidget";
import DuckImg from "../../images/duck-img.png";
import StyledNav from "./StyledNav";
const fontColor = "#242424";
const fontFocusColor = "#3bd";
const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <Link to="/" className="logo">
        <img src={DuckImg} className="logo-img" alt="logo duck" />
        <h1>CreaturesNFT</h1>
      </Link>
      <ul>
        <li>
          <Link
            style={
              pathname === "/"
                ? { color: fontFocusColor }
                : { color: fontColor }
            }
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            style={
              pathname.startsWith("/products")
                ? { color: fontFocusColor }
                : { color: fontColor }
            }
            to="/products"
          >
            Products
          </Link>
        </li>
        <CartWidget />
      </ul>
    </StyledNav>
  );
};

export default NavBar;
