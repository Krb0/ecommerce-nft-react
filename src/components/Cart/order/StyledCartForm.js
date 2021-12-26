import styled from "styled-components";
import { Form } from "formik";

const StyledCartForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    font-size: 32px;
    text-align: center;
    :last-of-type {
      margin: 0.5rem auto 0 auto;
    }
  }
  input {
    width: 30%;
    margin: 0.3rem auto 0 auto;
    text-align: center;
    height: 0.5rem;
    font-size: 0.25rem;
    :last-of-type {
      margin: 0.3rem auto 0.5rem auto;
    }
  }
  span {
    font-size: 24px;
    color: red;
    text-align: center;
    :last-of-type {
      margin: 0 auto 0.5rem auto;
    }
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
  }
  @media (max-width: 768px) {
    label,
    span {
      font-size: 24px;
    }
    input {
      width: 80%;
    }
  }
`;

export default StyledCartForm;
