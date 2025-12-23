import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin();
    navigate("/");
  };
  return (
    <div className={styles.formWrapper}>
      <h1>Log in to Exclusive</h1>
      <p>Enter your details below</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Email or Phone Number" />
        <input type="password" placeholder="Password" />

        <div className={styles.actions}>
          <button type="submit">Log In</button>
          <span className={styles.forgot}>Forget Password?</span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
