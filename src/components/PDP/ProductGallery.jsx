import React, { useState } from "react";
import styles from "./ProductGallery.module.css";

const ProductGallery = ({ product }) => {
  const { image, colors } = product;

  const images = colors?.length
    ? colors.map(c => c.image)
    : [image];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className={styles.gallery}>
      {/* Thumbnails */}
      <div className={styles.thumbs}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`${styles.thumb} ${
              activeImage === img ? styles.active : ""
            }`}
            onClick={() => setActiveImage(img)}
          >
            <img src={img} alt="thumbnail" />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className={styles.mainImage}>
        <img src={activeImage} alt={product.title} />
      </div>
    </div>
  );
};

export default ProductGallery;
