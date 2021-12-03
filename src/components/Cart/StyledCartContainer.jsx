import styled from "styled-components";

const StyledCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .headers-container {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  }
  .info-container {
    display: flex;
    flex-direction: column;
    max-height: 800px;
    overflow-y: scroll;
    align-items: space-between;
    min-height: 600px;
  }
  .info {
    display: flex;
    justify-self: center;
    justify-content: space-between;
    height: 300px;
    min-height: 200px;
    border: 1px red solid;
  }
  .info img {
    height: 200px;
    aspect-ratio: 1;
    margin: auto 3.1%;
    align-self: center;
  }
  .info span,
  .headers-container span {
    margin: auto;
    font-size: 0.5rem;
    text-align: center;
    width: 20%;
  }
`;

export default StyledCartContainer;
