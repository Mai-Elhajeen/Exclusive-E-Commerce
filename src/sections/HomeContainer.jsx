import React from "react";
import Hero from "./Hero";
import Todays from "./Todays";
import Categories from "./Categories";
import ThisMonth from "./ThisMonth";
import BannerCategories from "./BannerCategories";
import OurProducts from "./OurProducts";
import Featured from "./Featured";
import Services from "./Services";
const HomeContainer = ({ isLoggedIn, favoriteItems, toggleFavorite }) => {
  return (
    <>
      <Hero />
      <Todays
        isLoggedIn={isLoggedIn}
        favoriteItems={favoriteItems}
        toggleFavorite={toggleFavorite}
      />
      <Categories />
      <ThisMonth
        isLoggedIn={isLoggedIn}
        favoriteItems={favoriteItems}
        toggleFavorite={toggleFavorite}
      />
      <BannerCategories />
      <OurProducts
        isLoggedIn={isLoggedIn}
        favoriteItems={favoriteItems}
        toggleFavorite={toggleFavorite}
      />
      <Featured />
      <Services />
    </>
  );
};

export default HomeContainer;
