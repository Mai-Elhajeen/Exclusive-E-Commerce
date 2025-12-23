import React from "react";
import { Breadcrumbs, CartSummary, CartTable } from "../components";
import styles from "./styles.module.css";

const CartContainer = () => {
  return (
    <section className={styles.cart}>
      <Breadcrumbs />

      <div className={styles.layout}>
        <CartTable />
        <CartSummary />
      </div>
    </section>
  );
};

export default CartContainer;
