import React from "react";
import Home from "../views/Home";
import Products from "../views/Products";
import Cart from "../views/Cart";
import ItemListContainer from "../components/Products/containers/ItemListContainer";
import ItemDetailContainer from "../components/Products/containers/ItemDetailContainer";
import NotMatch from "../components/NotMatch/NotMatch";
import { useState } from "react";
import { Routes as Switch, Route } from "react-router-dom";

const Routes = () => {
  const [allProducts, setAllProducts] = useState([]);
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route
        path="/products"
        element={
          <Products
            ItemListContainer={ItemListContainer}
            allProducts={allProducts}
            setAllProducts={setAllProducts}
          />
        }
      />
      <Route path="/products/:idProduct" element={<ItemDetailContainer />} />
      <Route
        path="/category/:idCategory"
        element={
          <Products
            ItemListContainer={ItemListContainer}
            allProducts={allProducts}
            setAllProducts={setAllProducts}
          />
        }
      />
      <Route path="*" element={<NotMatch />} />
      <Route path="/cart" element={<Cart />} />
    </Switch>
  );
};

export default Routes;
