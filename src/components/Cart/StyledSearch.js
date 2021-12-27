import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 100%;
    font-size: 0.5rem;
    margin: 0.2rem auto 0rem auto;
    span {
      font-size: 0.4rem;
      color: gray;
    }
  }
  button {
    margin-top: 0.5rem;
    border: none;
    color: white;
    padding: 12px 26px;
    text-align: center;
    border-radius: 4px;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    background: rgb(51, 187, 221);
  }
  h2 {
    font-size: 0.6rem;
    font-weight: 500;
    margin-top: 0;
    text-align: center;
  }
  input {
    width: 40%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    span {
      color: red;
      font-size: 0.3rem;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 0.5rem;
    }
    p {
      font-size: 0.4rem;
      span {
        font-size: 0.3rem;
        color: gray;
      }
    }
  }
`;

export default StyledSearch;
