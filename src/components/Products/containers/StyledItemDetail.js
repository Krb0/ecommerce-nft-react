import styled from "styled-components";

const StyledItemDetail = styled.div`
  min-height: 90vh;
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  .nft-image {
    border-radius: 5px;
    width: 600px;
    height: 600px;
    align-self: center;
  }
  .image-container {
    display: flex;
    width: 700px;
    justify-content: center;
  }
  .nft-info {
    font-size: 40%;
    width: 30%;
    height: auto;
    h1 {
      margin-top: 1rem;
      font-family: "Orbitron", sans-serif;
    }
    .nft-stock {
      color: gray;
      padding-left: 0.4rem;
    }
    .nft-text {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
    }
    .nft-creator-container {
      display: flex;
      align-items: center;
      width: 120px;
      text-decoration: none;
      h3 {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 0.4rem;
        color: #242424;
      }
      img {
        border-radius: 50%;
        height: 50px;
        margin-right: 0.1rem;
      }
    }
    .price-creator-container {
      width: 80%;
      display: flex;
      justify-content: space-between;
    }
    .price-container {
      display: flex;
      align-items: center;
      svg {
        color: purple;
        margin-right: 0.2rem;
      }
    }
    .btn-container {
      display: flex;
      justify-content: center;
      .counter-div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 160px;
        button {
          height: 0.5rem;
        }
      }
    }
  }
  button {
    background: #33bbdd;
    cursor: pointer;
    color: white;
    border: none;
  }
  .end-purchase {
    background: #f70909;
  }
  @media (max-width: 999px) {
    .nft-info {
      width: 90%;
      margin-bottom: 1rem;
      .price-creator-container {
        width: 100%;
        justify-content: space-between;
      }
    }
  }
  @media (max-width: 800px) {
    .nft-image {
      margin-top: 1rem;
      width: 300px;
      height: 300px;
    }
    .nft-info {
      * {
        font-size: 90%;
      }
    }
  }
`;

export default StyledItemDetail;
