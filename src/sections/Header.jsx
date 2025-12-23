import React from "react";
import { TopHeader, MainHeader, Line } from "../components";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, favoriteItems = [] }) => {
  const navigate = useNavigate();

  return (
    <header>
      <TopHeader />
      <MainHeader
        showFavorite
        showCart
        showUser={isLoggedIn}
        countFavorite={favoriteItems.length}
        onCartClick={() =>
          isLoggedIn ? navigate("/cart") : navigate("/login")
        }
        onFavoriteClick={() => {
          if (!isLoggedIn) navigate("/login");
        }}
      />
      <Line margin="16px 0 0" />
    </header>
  );
};

export default Header;
