import React from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles.formWrapper}>
      <h1>Log in to Exclusive</h1>
      <p>Enter your details below</p>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Email or Phone Number"
        />
        <input
          type="password"
          placeholder="Password"
        />

        <div className={styles.actions}>
          <button type="submit">Log In</button>
          <span className={styles.forgot}>
            Forget Password?
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
