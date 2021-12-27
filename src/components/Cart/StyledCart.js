import styled from "styled-components";

const StyledCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  .cart-btn-container {
    align-self: center;
    display: flex;
    width: 95%;
    justify-content: space-between;
    button {
      background-color: rgb(51, 187, 221);
      margin-top: 1rem;
    }
    .btn-clr {
      background-color: #4caf50;
    }
  }
  button {
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    border-radius: 4px;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
  }
  .btn-complete {
    background-color: #f44336;
    margin-bottom: 1rem;
  }
  .span-total {
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
    svg {
      color: purple;
    }
  }
  .span-total,
  .btn-complete {
    align-self: flex-end;
    margin-right: 1rem;
  }

  .info-container {
    max-height: 900px;
    overflow-y: scroll;

    .info {
      border: 1px solid rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: space-between;
      width: 95%;
      margin: 1rem auto;
      font-size: 0.5rem;
      padding: 0.5rem;
      .info-quantity {
        width: 100px;
        align-items: center;
        display: flex;
        justify-content: center;
        svg {
          font-size: 24px;
          margin-left: 0.1rem;
          color: red;
          cursor: pointer;
        }
        input {
          width: 40px;
          height: 45px;
          text-align: center;
          font-size: 0.3rem;
          border: 1px solid rgba(0, 0, 0, 0.2);
        }
      }
      .info-image {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 200px;
        span {
          width: 90%;
          text-align: center;
          margin-left: 0.2rem;
        }
        img {
          height: 200px;
          width: 200px;
        }
      }
      .info-price {
        display: flex;
        align-items: center;
        svg {
          color: purple;
        }
      }
      @media (max-width: 800px) {
        .info-image {
          flex-direction: column;
        }
      }
      @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        div {
          margin: 0.5rem auto;
        }
      }
    }
  }
`;

export default StyledCartContainer;
