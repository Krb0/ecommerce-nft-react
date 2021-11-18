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
  .logo {
    margin: 0.1rem 1.4rem;
    display: flex;
    flex: 1;
    align-items: center;
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
    font-size: 0.35rem;
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
  @media (max-width: 900px) {
    justify-content: center;
    .logo {
      margin: auto;
      justify-content: center;
    }
  }
`;
export default StyledNav;
