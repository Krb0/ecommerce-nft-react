import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import CartWidget from "./CartWidget";
const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <div className="logo">
        <h1>CreaturesNFT</h1>
      </div>
      <ul>
        <li>
          <Link
            style={pathname === "/" ? { color: "#3bd1c2" } : { color: "white" }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            style={
              pathname.startsWith("/products")
                ? { color: "#3bd1c2" }
                : { color: "white" }
            }
            to="/products"
          >
            Productos
          </Link>
        </li>
        <CartWidget />
      </ul>
    </StyledNav>
  );
};

export default NavBar;
const StyledNav = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap");
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 0.1rem 0;
  color: white;
  .logo {
    margin: auto 1.4rem;
  }
  h1 {
    font-size: 0.5rem;
    font-family: Mohave, sans-serif;
    text-align: center;
    user-select: none;
  }
  ul {
    height: 100%;
    width: 8rem;
    display: flex;
    flex-direction: flex-end;
    justify-content: space-between;
    font-size: 0.32rem;
    font-family: "Lato", sans-serif;
    font-weight: 100;
    list-style: none;
    padding-right: 10%;
  }
  li {
    display: flex;
    align-items: center;
    width: auto;
  }
  a {
    text-decoration: none;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;
