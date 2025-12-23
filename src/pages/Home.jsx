import React from "react";
import { Footer, Header, HomeContainer } from "../sections";
const Home = ({ isLoggedIn, favoriteItems, toggleFavorite }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} favoriteItems={favoriteItems} />
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
