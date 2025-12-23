import React from 'react'
import { TopHeader, MainHeader, Line } from "../components";
import { Footer, LoginContainer } from "../sections";

const Login = () => {
  return (
    <>
      <TopHeader />
      <MainHeader showUser={true} countCart={3} />
      <Line margin="16px 0 0" />
      <LoginContainer />
      <Footer />
    </>  )
}

export default Login