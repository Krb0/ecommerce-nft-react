import styled from "styled-components";

const StyledFooter = styled.footer`
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
    font-family: "Red Hat Mono", monospace;
    font-size: 0.7rem;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    text-align: center;
  }
  ul {
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding: 0;
    list-style: none;
    width: 60%;
    justify-content: center;
    svg {
      font-size: 0.8rem;
      cursor: pointer;
      margin: 0rem 0.3rem;
      align-self: center;
    }
  }
  @media (max-width: 900px) {
    h2,
    ul svg {
      font-size: 0.6rem;
    }
  }
`;
export default StyledFooter;
