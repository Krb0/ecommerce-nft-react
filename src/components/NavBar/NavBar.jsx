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
          <div className="navbar-dropdown">
            <Link
              style={
                pathname.startsWith("/products") ||
                pathname.startsWith("/category")
                  ? { color: fontFocusColor }
                  : { color: fontColor }
              }
              to="/products"
              className="products-btn"
            >
              Products
            </Link>
            <div className="dropdown-content">
              <Link
                to="/category/humans"
                style={
                  pathname.startsWith("/category/humans")
                    ? { color: fontFocusColor }
                    : { color: fontColor }
                }
              >
                Humans
              </Link>
              <Link
                to="/category/animals"
                style={
                  pathname.startsWith("/category/animals")
                    ? { color: fontFocusColor }
                    : { color: fontColor }
                }
              >
                Animals
              </Link>
              <Link
                to="/category/others"
                style={
                  pathname.startsWith("/category/others")
                    ? { color: fontFocusColor }
                    : { color: fontColor }
                }
              >
                Others
              </Link>
            </div>
          </div>
        </li>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </ul>
    </StyledNav>
  );
};

export default NavBar;
