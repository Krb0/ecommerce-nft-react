import React from "react";
import StyledCardNFT from "./StyledCardNFT";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <StyledCardNFT>
      <Link to={`/products/${product.id}`} className="detail-link">
        <img src={product.nftimage} alt="nft"></img>

        <div className="detail-container">
          <div className="name-div">
            <h1 onClick={() => console.log(product.nftimage)}>
              {product.name}{" "}
            </h1>
          </div>
          <div className="price-container">
            <h3>Price</h3>
            <h4>
              <FontAwesomeIcon icon={faEthereum} />
              {product.price}
            </h4>
          </div>
        </div>
      </Link>
    </StyledCardNFT>
  );
};

export default Product;
