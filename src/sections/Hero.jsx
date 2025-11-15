import React from "react";
import { Banner, CategoriesSidebar } from "../components";
import styles from "./styles.module.css"
const Hero = () => {
  return (
    <section className={styles.hero}>
      <CategoriesSidebar />
      <Banner />
    </section>
  );
};

export default Hero;
