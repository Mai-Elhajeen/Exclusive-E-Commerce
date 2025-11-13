import React from "react";
import styles from "./TopHeader.module.css";

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
      <p className={styles.text}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!   
        <a href="#">ShopNow</a>
      </p>
      <div className={styles.language}>
        <select name="lang" id="lang">
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    </div>
  );
};

export default TopHeader;
