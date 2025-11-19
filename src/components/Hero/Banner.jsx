import Ellipses from "./Ellipses";
import styles from "./Banner.module.css";
import { useState } from "react";

import React from "react";

const Banner = ({
  title,
  showIcon = false,
  icon = null,
  description,
  image,
  children,
}) => {
  const [activeSlide, setActiveSlide] = useState(2);

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.textBox}>
          {title && (
            <div className={styles.titleWrapper}>
              {showIcon && icon && <span className={styles.icon}>{icon}</span>}
              <span className={styles.title}>{title}</span>
            </div>
          )}
          {description && <p className={styles.description}>{description}</p>}
          {children}
        </div>

        {image && (
          <div className={styles.imageWrapper}>
            <img src={image} alt={title} />
          </div>
        )}
      </div>
      <Ellipses
        activeIndexEllipse={activeSlide}
        onChange={(index) => setActiveSlide(index)}
      />
    </div>
  );
};

export default Banner;
