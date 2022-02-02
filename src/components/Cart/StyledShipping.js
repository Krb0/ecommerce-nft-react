import styled from "styled-components";

const StyledShipping = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0);
  justify-content: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  .active {
    background: rgba(0, 0, 0, 0.05);
  }
  .info-shipping-container {
    display: flex;
    gap: 0.5rem;
  }
  .info-shipping {
    cursor: pointer;
    border-radius: 5px;
    padding: 0.25rem;
    span {
      font-size: 0.5rem;
      display: flex;
      align-items: center;
      font-weight: 400;
      user-select: none;
    }
    .info-shipping-time {
      font-size: 0.3rem;
      font-weight: 300;
      color: gray;
      margin-left: 0.1rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 480px) {
    .info-shipping-container {
      gap: 0.2rem;
      .info-shipping {
        padding: 0.1rem;
        span {
          font-size: 0.35rem;
        }
        .info-shipping-time {
          font-size: 0.25rem;
        }
      }
    }
  }
  @media (max-width: 290px) {
    .info-shipping-container {
      gap: 0.1rem;
      .info-shipping {
        padding: 0.1rem;
        span {
          font-size: 0.3rem;
        }
        .info-shipping-time {
          font-size: 0.2rem;
        }
      }
    }
  }
`;

export default StyledShipping;
