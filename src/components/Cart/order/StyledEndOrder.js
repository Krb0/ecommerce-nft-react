import styled from "styled-components";

const StyledEndOrder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
  }
  p {
    width: 100%;
    font-size: 0.6rem;
    margin: 0.2rem auto 0rem auto;
    span {
      font-size: 0.55rem;
      color: gray;
    }
  }
  h3 {
    width: 100%;
    font-size: 0.6rem;
    text-align: center;
    font-weight: 700;
  }
  .order-info-total {
    svg {
      color: purple;
      margin-left: 5px;
    }
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 0.4rem;
    }
    p {
      font-size: 0.33rem;
      span {
        font-size: 0.3rem;
        color: gray;
      }
    }
  }
`;

export default StyledEndOrder;
