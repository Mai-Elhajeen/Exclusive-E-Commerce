import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Cart, Checkout, Login, ProductDetailsPage } from "./pages/Index";
import { CartProvider } from "./context/CartContext";
import { ScrollToTop } from "./components";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const toggleFavorite = (productId) => {
    setFavoriteItems((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      } 
    });
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem("isLoggedIn");
    if (storedAuth === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLoggedIn={isLoggedIn}
                favoriteItems={favoriteItems}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/checkout"
            element={<Checkout isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetailsPage
                isLoggedIn={isLoggedIn}
                favoriteItems={favoriteItems}
                toggleFavorite={toggleFavorite}
              />
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
