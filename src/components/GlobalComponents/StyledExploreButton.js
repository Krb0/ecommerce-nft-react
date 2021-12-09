import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledExploreButton = styled(Link)`
  display: flex;
  text-decoration: none;
  width: 3rem;
  align-items: center;
  .btn-explore {
    font-family: Lato, sans-serif;
    font-weight: 400;
    width: 3rem;
    height: 0.9rem;
    background-color: #fff;
    border: 1px solid #fff;
    font-size: 0.4rem;
    border-radius: 8px;
    cursor: pointer;
    :hover {
      background-color: #e0e0e0;
    }
    @media (max-width: 900px) {
      .btn-explore {
        font-size: 0.25rem;
        width: 2rem;
      }
    }
  }
`;

export default StyledExploreButton;
