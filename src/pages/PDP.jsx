import React from "react";
import { TopHeader, MainHeader, Line } from "../components";
import { Footer, PDPContent, RelatedItems } from "../sections";

const ProductDetailsPage = () => {
  return (
    <>
      <TopHeader />
      <MainHeader showUser={true} countCart={3} />
      <Line margin="16px 0 0" />
      <PDPContent />
      <RelatedItems />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
