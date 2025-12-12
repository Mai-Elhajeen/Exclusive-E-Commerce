import React from "react";
import styles from "./CardArrival.module.css";

const CardArrival = ({ title, description, image, size }) => {
  return (
    <div
      className={`${styles.card} ${
        size === "large" ? styles.large : size === "medium" ? styles.medium : styles.small
      }`}
    >
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <a href="#">ShopNow</a>
      </div>
    </div>
  );
};

export default CardArrival;
