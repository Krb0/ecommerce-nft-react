import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Products from "./views/Products";
import Cart from "./views/Cart";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Products/containers/ItemListContainer";
import ItemDetailContainer from "./components/Products/containers/ItemDetailContainer";
import NotMatch from "./components/NotMatch/NotMatch";
import { CartProvider } from "./components/GlobalComponents/CartContext";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  return (
    <div className="App">
      <CartProvider>
        <NavBar />
        <Routes>
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
          <Route
            path="/products/:idProduct"
            element={<ItemDetailContainer />}
          />
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
        </Routes>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
