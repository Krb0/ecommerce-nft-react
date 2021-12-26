import styled from "styled-components";

const StyledConfirm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 0.7rem;
  gap: 0.01rem;
  svg {
    margin-left: 0.05rem;
    color: purple;
  }
  .total {
    margin-top: 0.5rem;
  }
  span {
    word-wrap: break-word;
    width: 100%;
    font-weight: 400;
  }
  button {
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    background: #81baf0;
    width: 120px;
    align-self: center;
    margin-top: 0.5rem;
  }
  @media (max-width: 600px) {
    font-size: 0.35rem;
  }
`;

export default StyledConfirm;
