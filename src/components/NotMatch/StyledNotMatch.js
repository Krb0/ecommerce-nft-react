import styled from "styled-components";
 
 
const StyledNotMatch = styled.div`
 display:flex;
 flex-direction:column;
 height:75vh;
 width:100%;
 align-items:center;
 justify-content:center;
 font-family: 'Roboto', sans-serif;
 img{
     width:300px;
     height:300px;
 }
 a{
     display:flex;
     flex-direction:column;
     align-items: center;
     font-size: 0.6rem;
     text-decoration:none;
     color: #242424;
     h3{
         font-weight: 600;
     }
 }
`;
 
export default StyledNotMatch;