import React from "react";
import { useNavigate } from "react-router-dom";
import { TopHeader, MainHeader, Line } from "../components";
import { Footer, PDPContent, RelatedItems } from "../sections";

const ProductDetailsPage = ({ isLoggedIn, favoriteItems, toggleFavorite }) => {
  const navigate = useNavigate();

  return (
    <>
      <TopHeader />
      <MainHeader
        showFavorite
        showCart
        showUser={isLoggedIn}
        onCartClick={() =>
          isLoggedIn ? navigate("/cart") : navigate("/login")
        }
        countFavorite={favoriteItems.length}
        onFavoriteClick={() => (isLoggedIn ? null : navigate("/login"))}
      />
      <Line margin="16px 0 0" />
      <PDPContent
        isLoggedIn={isLoggedIn}
        favoriteItems={favoriteItems}
        toggleFavorite={toggleFavorite}
      />
      <RelatedItems />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
