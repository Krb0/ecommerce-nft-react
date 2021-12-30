import React, { useState, useRef } from "react";
import { getOrder } from "../../Firebase/firebase";
import StyledSearch from "./StyledSearch";
const OrderSearch = () => {
  const [isSearching, setIsSearching] = useState(true);
  const [searchData, setSearchData] = useState(null);
  const [searchExists, setSearchExists] = useState(true);
  const inputRef = useRef();
  return (
    <StyledSearch>
      {isSearching ? (
        <>
          <h2>Search your order</h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const order = await getOrder(inputRef.current.value);
              // Checking if entered order ID exists in firestore
              if (order) {
                setSearchExists(true);
                setSearchData(order);
                setIsSearching(false);
              } else {
                setSearchExists(false);
              }
            }}
          >
            <input placeholder="Your order ID" required ref={inputRef} />
            {!searchExists ? <span>ID doesn't exist</span> : ""}
            <button>Search</button>
          </form>
        </>
      ) : (
        <>
          <h2>Order Results</h2>
          <p>
            <span>Name:</span> {searchData.buyer.name}
          </p>
          <p>
            <span>Email:</span> {searchData.buyer.email}
          </p>
          <p>
            <span>Delivery:</span>{" "}
            {searchData.delivery ? "Deluxe (~20 minutes)" : "Normal (~5 hours)"}
          </p>
          <p>
            <span>Items: </span>{" "}
          </p>
          <ul>
            {searchData.items.map((prod) => (
              <li>
                {prod.name} x {prod.quantity}{" "}
              </li>
            ))}
          </ul>
          <p>
            <span>Total:</span> {searchData.total}
          </p>
        </>
      )}
    </StyledSearch>
  );
};

export default OrderSearch;
