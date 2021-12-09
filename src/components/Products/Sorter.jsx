import React from "react";
import sortHandler from "./controllers/sortHandler";
import StyledSorter from "./StyledSorter";
const Sorter = ({ filteredProducts, setFilteredProducts }) => {
  return (
    <StyledSorter
      style={{ textAlign: "center" }}
      onChange={(e) => {
        setFilteredProducts([
          ...filteredProducts.sort((a, b) => sortHandler(a, b, e.target.value)),
        ]);
      }}
    >
      <option value="default">{" Sort "}</option>

      <option value="highestPrice">Highest Price</option>
      <option value="lowestPrice">Lowest Price</option>
      <option value="alphabeticalAsc">Alphabetical (A - Z)</option>
      <option value="alphabeticalDesc">Alphabetical (Z - A)</option>
    </StyledSorter>
  );
};

export default Sorter;
