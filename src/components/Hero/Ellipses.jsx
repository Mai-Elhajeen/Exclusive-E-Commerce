import React from "react";
import styles from "./Banner.module.css";

const Ellipses = ({
  count = 5,
  activeIndexEllipse = null,
  onChange = null,
}) => {
  return (
    <div className={styles.ellipses}>
      {[...Array(count)].map((_, index) => (
        <span
          key={index}
          className={`${styles.dot} ${styles.size} ${
            index === activeIndexEllipse ? styles.active : ""
          }`}
          onClick={() => onChange && onChange(index)}
        />
      ))}
    </div>
  );
};

export default Ellipses;
