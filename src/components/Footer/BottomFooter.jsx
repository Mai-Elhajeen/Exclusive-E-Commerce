import React from "react";
import { Line } from "../../components";
import styles from "./BottomFooter.module.css";

const BottomFooter = () => {
  return (
    <>
      <Line margin="0" opacity="80%" />
      <div className={styles.bottomFooter}>
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </>
  );
};

export default BottomFooter;
