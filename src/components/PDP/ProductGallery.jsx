import React, { useEffect, useState } from "react";
import styles from "./ProductGallery.module.css";

const ProductGallery = ({ product, activeColorKey }) => {
  if (!product) return null;
  
  const activeColor =
    product.colors?.find((c) => c.key === activeColorKey) ||
    product.colors?.[0];
  
  const images =
    activeColor?.images?.length > 0
      ? activeColor.images
      : product.image
      ? [product.image]
      : [];

  const [activeImage, setActiveImage] = useState(images[0] || null);

  useEffect(() => {
    if (images.length > 0) {
      setActiveImage(images[0]);
    }
  }, [activeColorKey, images]);

  if (!images.length) return null;

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
            <img src={img} alt={`angle-${idx}`} />
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
