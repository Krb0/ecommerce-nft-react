import styled from "styled-components";

const StyledCardNFT = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  flex: 1 1 5rem;
  margin: 0.1rem;
  font-family: "Anton", sans-serif;
  font-weight: 100;
  img {
    width: 300px;
    max-width: 100%;
    height: 280px;
    object-fit: cover;
    object-position: center;
  }
  h1 {
    font-size: 0.3rem;
    text-align: center;
  }
`;

export default StyledCardNFT;
