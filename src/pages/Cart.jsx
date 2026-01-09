import React from "react";
import { TopHeader, MainHeader, Line } from "../components";
import { CartContainer, Footer } from "../sections";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { totalQuantity } = useCart();
  return (
    <>
      <TopHeader />
      <MainHeader showUser={true} countCart={totalQuantity} />
      <CartContainer />
      <Footer />
    </>
  );
};

export default Cart;
