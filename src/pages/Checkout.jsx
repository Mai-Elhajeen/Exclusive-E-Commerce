import React from "react";
import { TopHeader, MainHeader, Line } from "../components";
import { CheckoutContainer, Footer } from "../sections";

const Checkout = () => {
  return (
    <>
      <TopHeader />
      <MainHeader showUser={true} countCart={3} />
      <CheckoutContainer />
      <Footer />
    </>
  );
};

export default Checkout;
