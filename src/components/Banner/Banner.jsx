import React from "react";
import styles from "./Banner.module.css";

import { HeadTitle, Title, Timer, Btn } from "../index";
import { bannerData } from "../../data/bannerData";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <HeadTitle title={bannerData.headTitle} size="0" width="0" height="0" color="#00FF66" />

        <Title
          title={`${bannerData.title}`} color="#FAFAFA" 
        />

        <div className={styles.timer}>
            <Timer targetDate="2025-12-31T23:59:59" variant="banner" />
        </div>

        <Btn label={bannerData.buttonLabel} space="0" center="flex-start" bg="#00FF66"  />
      </div>

      <div className={styles.imageWrapper}>
        <img src={bannerData.image} alt="Banner" className={styles.image} />
      </div>
    </section>
  );
};

export default Banner;
