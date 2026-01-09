import React from "react";
import { TopHeader, MainHeader, Line } from "../components";
import { CheckoutContainer, Footer } from "../sections";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { totalQuantity } = useCart();
  return (
    <>
      <TopHeader />
      <MainHeader showUser={true} countCart={totalQuantity} />
      <CheckoutContainer />
      <Footer />
    </>
  );
};

export default Checkout;
