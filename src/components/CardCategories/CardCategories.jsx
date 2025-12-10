import React from "react";
import styles from "./CardCategories.module.css";

const CardCategories = ({ name, icon: Icon }) => {
  return (
    <div className={styles.item}>
      <Icon size={56} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default CardCategories;
