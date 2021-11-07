import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Products from "./views/Products";
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
    </div>
  );
}

export default App;
