import React, { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";
import { RiArrowUpLine } from "@remixicon/react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return showButton ? (
    <button className={styles.btn} onClick={scrollTop}>
      <RiArrowUpLine size={22} />
    </button>
  ) : null;
};

export default ScrollToTop;
