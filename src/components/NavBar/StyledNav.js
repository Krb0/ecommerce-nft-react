import styled from "styled-components";

const fontColor = "#242424";

const StyledNav = styled.nav`
  display: flex;
  width: 100vw;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #e5e5e5;
  padding: 0.1rem 0;
  max-width: 100%;
  flex-wrap: wrap;
  color: ${fontColor};
  box-shadow: rgb(4 17 29 / 70%) 0px 0px 8px 0px;
  .logo {
    margin: 0.1rem 1.4rem;
    display: flex;
    flex: 1;
    align-items: center;
    color: #242424;
    text-decoration: none;
  }
  .logo img {
    width: 80px;
    height: 80px;
  }
  img {
    width: 500px;
    height: 500px;
  }
  h1 {
    font-size: 0.4rem;
    font-family: "Mohave", sans-serif;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
  ul {
    height: 100%;
    width: 8rem;
    display: flex;
    flex-direction: flex-end;
    justify-content: space-between;
    align-items: center;
    font-size: 0.32rem;
    font-family: "Lato", sans-serif;
    font-weight: 400;
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
    font-size: 0.34rem;
  }
  .cart-img {
    width: 50px;
    height: 50px;
  }

  .navbar-dropdown {
    position: relative;
    display: inline-block;

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 100px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      a {
        color: black;
        padding: 16px 16px;
        text-decoration: none;
        display: block;
        font-size: 0.32rem;
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
    &:hover .dropdown-content {
      display: block;
    }
  }
  .cart-widget {
    position: relative;
    span {
      position: absolute;
      right: -4%;
      top: -7%;
      background: rgba(51, 187, 221, 0.9);
      width: 25px;
      text-align: center;
      border-radius: 50%;
      color: white;
      font-size: 15px;
      line-height: 30px;
      aspect-ratio: 1;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
    .logo {
      margin: auto;
      justify-content: center;
    }
  }
`;
export default StyledNav;
