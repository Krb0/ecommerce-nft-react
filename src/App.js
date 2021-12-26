import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Routes from "./routes/Routes";
import { CartProvider } from "./Context/CartContext";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <div className="App">
      <ReactNotification />
      <CartProvider>
        <NavBar />
        <Routes />
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
