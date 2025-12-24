import React from 'react'
import { TopHeader, MainHeader, Line } from "../components";
import { Footer, LoginContainer } from "../sections";

const Login = ({ onLogin }) => {
  return (
    <>
      <TopHeader />
      <MainHeader showFavorite={false} showCart={false} showUser={false} />
      <LoginContainer onLogin={onLogin} />
      <Footer />
    </>  )
}

export default Login