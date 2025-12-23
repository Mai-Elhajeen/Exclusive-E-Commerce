import React from "react";
import { TopHeader, MainHeader, Line } from "../components";
import { CartContainer, Footer } from "../sections";

const Cart = () => {
  return (
    <>
      <TopHeader />
      <MainHeader showUser={true} countCart={3} />
      <Line margin="16px 0 0" />
      <CartContainer />
      <Footer />
    </>
  );
};

export default Cart;
