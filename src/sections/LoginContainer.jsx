import React from "react";
import styles from "./styles.module.css";
import { LoginForm } from "../components";

const LoginContainer = ({onLogin}) => {
  return (
    <section className={styles.login}>
      <div className={styles.imageWrapper}>
        <img
          src="/assets/login.png"
          alt="Login"
        />
      </div>

      <LoginForm onLogin={onLogin} />
    </section>
  );
};

export default LoginContainer;
