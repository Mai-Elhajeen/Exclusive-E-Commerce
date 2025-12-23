import React from "react";
import { BillingForm, Breadcrumbs, CheckoutSummary } from "../components";
import styles from "./styles.module.css";

const CheckoutContainer = () => {
  return (
    <section className={styles.checkout}>
      <Breadcrumbs />

      <div className={styles.container}>
        <BillingForm />
        <CheckoutSummary />
      </div>
    </section>
  );
};

export default CheckoutContainer;
