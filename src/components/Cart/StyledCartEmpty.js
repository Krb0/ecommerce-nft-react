import styled from "styled-components";

const StyledCartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
  gap: 20px;
  .active {
    background: #252525;
    color: white;

    :hover {
      background: #3b3b3b;
    }
  }
  svg {
    font-size: 4rem;
    color: rgba(0, 0, 0, 0.6);
  }
  span {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 0.5rem;
  }
  @media (max-width: 768px) {
    span {
      font-size: 0.55rem;
    }
    svg {
      font-size: 3.5rem;
    }
  }
`;

export default StyledCartEmpty;
