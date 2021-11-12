import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Products from "./views/Products";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/containers/ItemListContainer";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products ItemListContainer={ItemListContainer} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
