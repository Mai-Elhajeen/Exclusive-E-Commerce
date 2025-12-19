import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Cart, Checkout, Login, ProductDetailsPage } from "./pages/Index";
import { CartProvider } from "./context/CartContext";
import { ScrollToTop } from "./components";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
