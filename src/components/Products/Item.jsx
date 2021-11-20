import React from "react";
import StyledCardNFT from "./containers/StyledCardNFT";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import ItemCount from "./ItemCount";
const Product = ({ product }) => {
  const onAdd = () => {
    console.log("OnAdd Event");
  };
  return (
    <StyledCardNFT>
      <img src={product.nftimage} alt="nft"></img>
      <div className="detail-container">
        <div>
          <h1>{product.name} </h1>
          <ItemCount initial={0} stock={product.stock} onAdd={onAdd} />
        </div>
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
