import React from "react";
import StyledCardNFT from "./StyledCardNFT";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { scrollReveal } from "./animation";
import { useScroll } from "./useScroll";

const Product = ({ id, nftimage, name, price }) => {
  const [element, controls] = useScroll();
  return (
    <StyledCardNFT
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <Link to={`/products/${id}`} className="detail-link">
        <img src={nftimage} alt="nft"></img>

        <div className="detail-container">
          <div className="name-div">
            <h1>{name} </h1>
          </div>
          <div className="price-container">
            <h3>Price</h3>
            <h4>
              <FontAwesomeIcon icon={faEthereum} />
              {price}
            </h4>
          </div>
        </div>
      </Link>
    </StyledCardNFT>
  );
};

export default Product;
