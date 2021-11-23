import styled from "styled-components";

const StyledProductsPage = styled.div`
min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  input[type="search"] {
    width: 60%;
    padding: 0.15rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin: 0.5rem 0 0 0;
    border-radius: 3px;
  }
  ul{
    margin:0;
  }
    .paginate-container{
      margin:0.3rem 0;
      font-size: 0.3rem;
      display:flex;
      width:50%;
      list-style-type: none;
      justify-content: space-between;
      user-select: none;
      padding-left:0;
      li{
        height:100%;
        cursor:pointer;
        padding: 0.15rem;
      }
      li:first-child, li:last-child{
        border:0;
      }
      .paginate-active{
        color:#18aff8;
    }
    

  }
  @media (max-width: 768px){
    .paginate-container{
      font-size: 0.29rem;
      padding: 0.01rem;
      display:flex;
            width:90vw;

    }
  }
`;

export default StyledProductsPage;
