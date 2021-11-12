import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #242424;
  height: 300px;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h2 {
    @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&display=swap");
    font-family: "Red Hat Mono", monospace;
    font-size: 0.7rem;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
  }
  ul {
    margin-top: 0.2rem;
    margin-bottom: 0rem;
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding: 0;
    list-style: none;
    width: 12%;
    justify-content: space-between;
    svg {
      font-size: 0.8rem;
      cursor: pointer;
    }
  }
`;
export default StyledFooter;
