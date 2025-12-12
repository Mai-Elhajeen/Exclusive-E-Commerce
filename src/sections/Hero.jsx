import React from "react";
import { RiArrowRightLine, RiAppleFill } from "@remixicon/react";
import { Banner, CategoriesSidebar } from "../components";
import styles from "./styles.module.css";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <CategoriesSidebar />
      <Banner
        showIcon={true}
        icon={<RiAppleFill />}
        title="iPhone 14 Series"
        description="Up to 10% off Voucher"
        image="/assets/iphone14.jpg"
      >
        <a href="#" className="shopBtn">
          Shop Now <RiArrowRightLine />
        </a>
      </Banner>
    </section>
  );
};

export default Hero;
