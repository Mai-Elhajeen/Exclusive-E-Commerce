import React, { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";
import { RiArrowUpLine } from "@remixicon/react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const pathname = useLocation();

  useEffect(()=> {
    window.scrollTo({to: 0, behavior: "smooth"});
  }, [pathname])

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
