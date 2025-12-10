import React from "react";
import {RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react"
import styles from "./ArrowControls.module.css";

const ArrowControls = ({ onPrev, onNext }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={onPrev} aria-label="Previous">
        <RiArrowLeftLine />
      </button>
      <button className={styles.btn} onClick={onNext} aria-label="Next">
        <RiArrowRightLine />
      </button>
    </div>
  );
};

export default ArrowControls;
