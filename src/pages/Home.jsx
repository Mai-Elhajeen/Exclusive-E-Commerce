import React from "react";
import { Footer, HomeContainer } from "../sections";
import { TopHeader, MainHeader } from "../components";
import { useNavigate } from "react-router-dom";

const Home = ({ isLoggedIn, favoriteItems=[], toggleFavorite }) => {
    const navigate = useNavigate();
  
  return (
    <>
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
      <HomeContainer
        isLoggedIn={isLoggedIn}
        favoriteItems={favoriteItems}
        toggleFavorite={toggleFavorite}
      />
      <Footer />
    </>
  );
};

export default Home;
