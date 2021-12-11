import styled from "styled-components";
import { Form } from "formik";

const StyledCartForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 600px;
  label {
    font-size: 32px;
  }
  input {
    width: 30%;
  }
  div {
    font-size: 24px;
    color: red;
    margin-bottom: 1rem;
  }
`;

export default StyledCartForm;
