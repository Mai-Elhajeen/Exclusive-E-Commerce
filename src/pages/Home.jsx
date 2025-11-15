import React from "react";
import {
  Header,
  Hero,
  Todays,
  Categories,
  ThisMonth,
  BannerCategories,
  OurProducts,
  Featured,
  Services,
  Footer,
} from "../sections";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Todays />
      <Categories />
      <ThisMonth />
      <BannerCategories />
      <OurProducts />
      <Featured />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
