import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Products from "./views/Products";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Products/containers/ItemListContainer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/ecommerce-caceres" element={<Home />} />
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
