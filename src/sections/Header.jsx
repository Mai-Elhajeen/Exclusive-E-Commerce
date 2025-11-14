import React from "react";
import { TopHeader, MainHeader, Line } from "../components";

const Header = () => {
  return (
    <>
      <TopHeader />
      <MainHeader showUser={false} countCart={0} />
      <Line />
    </>
  );
};

export default Header;
