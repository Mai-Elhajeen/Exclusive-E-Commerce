import React from "react";
import { TopHeader, MainHeader, Line } from "../components";
import { CartContainer, Footer } from "../sections";

const Cart = () => {
  return (
    <>
      <TopHeader />
      <MainHeader showUser={true} countCart={3} />
      <CartContainer />
      <Footer />
    </>
  );
};

export default Cart;
