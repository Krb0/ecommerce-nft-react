import React from "react";
import StyledCardNFT from "./containers/StyledCardNFT";
const Product = ({ product }) => {
  return (
    <StyledCardNFT>
      <img src={product.nftimage} alt="nft"></img>
      <h1>{product.name} </h1>
    </StyledCardNFT>
  );
};

export default Product;
