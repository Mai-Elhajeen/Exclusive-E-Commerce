import React, { useEffect, useState } from "react";
import {
  RiDeleteBin6Line,
  RiEyeLine,
  RiHeartLine,
  RiStarFill,
  RiStarLine,
  RiStarHalfLine,
  RiHeartFill,
} from "@remixicon/react";
import styles from "./CardProduct.module.css";

const CardProduct = ({
  title,
  price,
  oldPrice,
  discount,
  badgeType = null,
  image,
  colors = [],
  rating = 0,
  views,
  showFavorite = true,
  showView = true,
  showDelete = false,
  showColors = true,
  showAddToCart = true,
  onAddToCart,
}) => {
  const [selectedColorKey, setSelectedColorKey] = useState(
    colors && colors.length > 0 ? colors[0].key : null
  );

  const displayedImage =
    (selectedColorKey &&
      colors.find((c) => c.key === selectedColorKey)?.image) ||
    image;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (colors && colors.length > 0) {
      setSelectedColorKey(colors[0].key);
    } else {
      setSelectedColorKey(null);
    }
  }, [colors]);
  return (
    <div className={styles.card}>
      {/* IMAGE + BADGE + ICONS */}
      <div className={styles.imageWrapper}>
        {/* BADGE */}
        {badgeType && (
          <span
            className={`${styles.badge} ${
              badgeType === "discount" ? styles.discount : styles.new
            }`}
          >
            {badgeType === "discount" ? `-${discount}%` : "NEW"}
          </span>
        )}

        <img src={displayedImage} alt={title} className={styles.image} />

        {/* ICONS */}
        <div className={styles.icons}>
          {showFavorite && (
            <span
              className={`${styles.icon} ${isFav ? styles.active : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsFav((prev) => !prev);
              }}
            >
              {isFav ? <RiHeartFill /> : <RiHeartLine />}
            </span>
          )}
          {showView && (
            <span className={styles.icon}>
              <RiEyeLine />
            </span>
          )}
          {showDelete && (
            <span className={styles.icon}>
              <RiDeleteBin6Line />
            </span>
          )}
        </div>

        {/* Add To Cart */}
        {showAddToCart && (
          <button
            className={styles.addToCart}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.();
            }}
          >
            Add To Cart
          </button>
        )}
      </div>

      <div className={styles.details}>
        {/* TITLE */}
        <h3 className={styles.title}>{title}</h3>
        {/* PRICE SECTION */}
        <div className={styles.prices}>
          <span className={styles.price}>${price}</span>
          {badgeType === "discount" && oldPrice && (
            <span className={styles.oldPrice}>${oldPrice}</span>
          )}
        </div>
        {/* RATING */}
        <div className={styles.ratingView}>
          <div className={styles.rating}>
            {Array.from({ length: 5 }).map((_, i) => {
              const fullStars = Math.floor(rating);
              const hasHalf = rating % 1 !== 0 && i === fullStars;

              if (i < fullStars) {
                return <RiStarFill key={i} className={styles.star} />;
              }

              if (hasHalf) {
                return <RiStarHalfLine key={i} className={styles.star} />;
              }

              return <RiStarLine key={i} className={styles.star} />;
            })}
          </div>
          <span className={styles.views}>({views})</span>
        </div>
      </div>

      {/* COLOR DOTS */}
      {showColors && colors.length > 0 && (
        <div className={styles.colors}>
          {colors.map((color) => (
            <span
              key={color.key}
              className={styles.dot}
              style={{
                backgroundColor: color.color,
                border:
                  selectedColorKey === color.key
                    ? "2px solid #000"
                    : "1px solid #ddd",
              }}
              onClick={() => setSelectedColorKey(color.key)}
              aria-label={`Select color ${color.key}`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardProduct;
