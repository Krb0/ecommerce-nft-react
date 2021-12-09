import styled from "styled-components";
import image from "../../images/home-image.jpg";

const StyledHomeMain = styled.div`
  width: 100vw;
  height: 800px;
  max-width: 100%;
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
    margin-top: 1rem;
    font-family: Mohave;
    text-shadow: -0.2px 0 black, 0 0.2px black, 0.2px 0 black, 0 -0.2px black;
    font-style: normal;
    font-weight: 700;
    color: #ffffff;
  }
  @media (max-width: 900px) {
    background-position: center;
    h2 {
      font-size: 1rem;
    }
  }
`;
export default StyledHomeMain;
