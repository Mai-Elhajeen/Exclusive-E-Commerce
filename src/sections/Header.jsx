import React from "react";
import { TopHeader, MainHeader, Line } from "../components";

const Header = () => {
  return (
    <header>
      <TopHeader />
      <MainHeader showUser={false} countCart={0} />
      <Line margin="16px 0 0" />
    </header>
  );
};

export default Header;
