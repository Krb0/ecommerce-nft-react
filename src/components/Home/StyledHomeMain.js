import styled from "styled-components";
import image from "../../images/home-image.jpg";

const StyledHomeMain = styled.div`
  width: 100vw;
  height: 800px;
  background: url(${image});
  background-size: cover;
  background-position: 0% 35%;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    display: block;
    margin: 0;
    margin-top: 1rem;
    font-family: Mohave;
    text-shadow: -0.2px 0 black, 0 0.2px black, 0.2px 0 black, 0 -0.2px black;

    font-style: normal;
    font-weight: 700;
    font-size: 1.4;
    color: #ffffff;
  }
  .btn-explore {
    font-family: Lato, sans-serif;
    font-weight: 400;
    width: 3rem;
    height: 0.9rem;
    background-color: #fff;
    border: 1px solid #fff;
    font-size: 0.4rem;
    border-radius: 8px;
    margin-top: 1rem;
  }
`;
export default StyledHomeMain;
