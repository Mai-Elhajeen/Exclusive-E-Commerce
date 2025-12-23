import React from 'react'
import { TopHeader, MainHeader, Line } from "../components";
import { Footer, LoginContainer } from "../sections";

const Login = ({ onLogin }) => {
  return (
    <>
      <TopHeader />
      <MainHeader showFavorite={false} showCart={false} showUser={false} />
      <Line margin="16px 0 0" />
      <LoginContainer onLogin={onLogin} />
      <Footer />
    </>  )
}

export default Login