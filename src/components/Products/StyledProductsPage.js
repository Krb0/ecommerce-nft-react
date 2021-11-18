import styled from "styled-components";

const StyledProductsPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
  input[type="search"] {
    width: 60%;
    padding: 0.15rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin: 0.5rem 0 0 0;
    border-radius: 3px;
  }
`;

export default StyledProductsPage;
