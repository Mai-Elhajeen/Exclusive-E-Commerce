import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RiStarFill,
  RiStarHalfLine,
  RiStarLine,
  RiTruckLine,
  RiRefreshLine,
  RiHeartLine,
  RiHeartFill,
} from "@remixicon/react";
import styles from "./ProductInfo.module.css";
import { useCart } from "../../context/CartContext";
import Line from "../Line";

const ProductInfo = ({
  product,
  activeColor,
  setActiveColor,
  activeSize,
  setActiveSize,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalf = product.rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) stars.push(<RiStarFill key={i} />);
      else if (i === fullStars && hasHalf)
        stars.push(<RiStarHalfLine key={i} />);
      else stars.push(<RiStarLine key={i} />);
    }
    return stars;
  };

  return (
    <div className={styles.info}>
      {/* TITLE */}
      <h1 className={styles.title}>{product.title}</h1>

      {/* RATING */}
      <div className={styles.ratingRow}>
        <div className={styles.stars}>{renderStars()}</div>
        <span className={styles.reviews}>({product.views} Reviews)</span>
        <span className={styles.separator}>|</span>
        <span
          className={`${styles.status} ${
            product.status === "In Stock" ? styles.inStock : styles.outOfStock
          }`}
        >
          {product.status}
        </span>
      </div>

      {/* PRICE */}
      <div className={styles.priceRow}>
        <span className={styles.price}>${product.price}</span>

        {product.oldPrice && (
          <span className={styles.oldPrice}>${product.oldPrice}</span>
        )}

        {product.discount && (
          <span className={styles.discount}>-{product.discount}%</span>
        )}
      </div>

      {/* DESCRIPTION */}
      <p className={styles.description}>{product.description}</p>

      <Line />

      {/* COLORS */}
      {product.colors?.length > 0 && (
        <div className={styles.colors}>
          <span className={styles.label}>Colors:</span>
          <div className={styles.colorDots}>
            {product.colors.map((color) => (
              <span
                key={color.key}
                className={`${styles.dot} ${
                  activeColor === color.key ? styles.active : ""
                }`}
                style={{ backgroundColor: color.color }}
                onClick={() => setActiveColor(color.key)}
                aria-label={`Select color ${color.key}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* SIZES */}
      {product.sizes?.length > 0 && (
        <div className={styles.sizes}>
          <span className={styles.label}>Size:</span>

          <div className={styles.sizeOptions}>
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`${styles.sizeBtn} ${
                  activeSize === size ? styles.active : ""
                }`}
                onClick={() => setActiveSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* QUANTITY + ADD + BUY + FAV*/}
      <div className={styles.actions}>
        <div className={styles.quantity}>
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>

        <button
          className={styles.btnActions}
          onClick={() => {
            if (product.colors?.length && !activeColor) {
              setErrorMsg("Please select a color");
              return;
            }

            if (product.sizes?.length && !activeSize) {
              setErrorMsg("Please select a size");
              return;
            }

            setErrorMsg("");
            addToCart(product, quantity, activeColor, activeSize);
          }}
        >
          Add To Cart
        </button>

        <button
          className={styles.btnActions}
          onClick={() => {
            if (!activeSize && product.sizes?.length) return;
            addToCart(product, quantity, activeColor, activeSize);
            navigate("/checkout");
          }}
        >
          Buy Now
        </button>

        <button
          type="button"
          className={styles.favBtn}
          onClick={() => setIsFavorite((prev) => !prev)}
          aria-label="Toggle favorite"
        >
          {isFavorite ? <RiHeartFill color="#db4444" /> : <RiHeartLine />}
        </button>
      </div>
      {errorMsg && <p className={styles.error}>{errorMsg}</p>}

      {/* DELIVERY INFO */}
      <div className={styles.delivery}>
        <div className={styles.deliveryItem}>
          <RiTruckLine />
          <div>
            <strong>Free Delivery</strong>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
        </div>

        <div className={styles.deliveryItem}>
          <RiRefreshLine />
          <div>
            <strong>Return Delivery</strong>
            <p>Free 30 Days Delivery Returns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
