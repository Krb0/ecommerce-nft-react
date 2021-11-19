import React from "react";
import StyledCardNFT from "./containers/StyledCardNFT";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

const Product = ({ product }) => {
  return (
    <StyledCardNFT>
      <img src={product.nftimage} alt="nft"></img>
      <div className="detail-container">
        <h1>{product.name} </h1>
        <div className="price-container">
          <h3>Price</h3>
          <h4>
            <FontAwesomeIcon icon={faEthereum} />
            {product.price}
          </h4>
        </div>
      </div>
    </StyledCardNFT>
  );
};

export default Product;
