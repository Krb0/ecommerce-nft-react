import styled from "styled-components";
import { motion } from "framer-motion";
const StyledCardNFT = styled(motion.div)`
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(235, 232, 232, 0.8);
  border: rgba(235, 232, 232, 0.9) 1px solid;
  border-radius: 5px;
  flex: 1 1 5rem;
  margin: 0.1rem;
  align-items: center;
  max-width: 450px;
  box-shadow: rgb(4 17 29 / 10%) 2px 2px 8px 2px;
  position: relative;
  overflow: hidden;
  a {
    text-decoration: none;
    color: inherit;
    width: 90%;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 95%;
    max-width: 350px;
    height: 280px;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
    user-select: none;
  }
  h1 {
    font-family: "Orbitron", sans-serif;
    font-size: 0.24rem;
    font-weight: 800;
    height: 50%;
    color: #525252;
    width: 80%;
    padding: 0 0.2rem;
  }
  .card-stock {
    position: absolute;
    font-size: 0.3rem;
    width: 5rem;
    left: -90px;
    padding-right: 0.5rem;
    text-align: center;
    transform: rotate(-25deg);
    background-color: rgba(235, 232, 232, 0.95);
    font-family: "Roboto", sans-serif;
  }
  .detail-container {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .price-container {
      display: flex;
      flex-direction: column;
      h3 {
        margin: 0.15rem 0 0 0;
        font-size: 0.25rem;
        color: #525252;
        text-align: right;
      }
      h4 {
        display: flex;
        font-size: 0.3rem;
        align-items: center;
        svg {
          margin-right: 0.1rem;
          color: purple;
        }
      }
    }
    .counter-div {
      display: flex;
      height: 0.5rem;

      p {
        font-size: 20px;
        margin: 0;
      }
    }

    .name-div {
      height: 100%;
      text-align: center;
      max-width: 100px;
      display: flex;
      flex-direction: column;
      width: 100%;
      h1 {
        width: 100%;
      }
    }
  }
  @media (max-width: 400px) {
    .name-div {
      h1 {
        font-size: 0.21rem;
      }
    }
  }
`;

export default StyledCardNFT;
