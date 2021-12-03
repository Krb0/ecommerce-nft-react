import React from "react";
import profileImg from "../../images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import ItemCount from "./ItemCount";
const ItemDetail = ({ product }) => {
  return (
    <>
      <div className="image-container">
        <img className="nft-image" src={product.nftimage} alt={"nft icon"} />
      </div>
      <div className="nft-info">
        <h1>{product.name}</h1>
        <p className="nft-stock">{product.stock} in stock</p>
        <p className="nft-text">
          Lorem ipsum Enim id anim deserunt est irure irure voluptate dolor
          adipisicing occaecat pariatur. Irure nulla consequat ullamco ex ex
          consectetur laboris. Id consectetur esse commodo enim labore
          consectetur. Enim minim minim veniam.
        </p>
        <div className="price-creator-container">
          <div className="price-container">
            <FontAwesomeIcon icon={faEthereum} />
            <p>{product.price} ETH</p>
          </div>
          <a className="nft-creator-container" href="https://github.com/krb0">
            <img src={profileImg} alt="profile icon" />
            <h3>Krb0</h3>
          </a>
        </div>
        <div className="btn-container">
          <ItemCount initial={5} product={product} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
