import React from "react";
import StyledCardNFT from "./containers/StyledCardNFT";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import ItemCount from "./ItemCount";
import onAddHandler from "../../utils/onAddHandler";
import {Link} from 'react-router-dom'
const Product = ({ product }) => {
  return (
    <StyledCardNFT >
      <Link to={`/products/${product.id}`}>
      <img src={product.nftimage} alt="nft" ></img></Link>
      <div className="detail-container">
        <div className="name-div">
          <h1>{product.name} </h1>
          <ItemCount
            initial={0}
            stock={product.stock}
            onAddHandler={onAddHandler}
          />
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
