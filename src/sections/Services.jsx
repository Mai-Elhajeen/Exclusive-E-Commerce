import React from "react";
import { CardService } from "../components";
import styles from "./styles.module.css";

const Services = () => {
  return (
    <div className={styles.services} >
      <CardService />
    </div>
  );
};

export default Services;
