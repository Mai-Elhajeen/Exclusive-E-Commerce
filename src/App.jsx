import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Cart, Checkout, Login, ProductDetailsPage } from "./pages/Index";
import "./App.css";
import { ScrollToTop } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
