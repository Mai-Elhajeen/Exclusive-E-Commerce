import React, { useState } from "react";
import {
  RiStarFill,
  RiStarHalfLine,
  RiStarLine,
  RiTruckLine,
  RiRefreshLine,
} from "@remixicon/react";
import styles from "./ProductInfo.module.css";
import { useCart } from "../../context/CartContext";
import Line from "../Line";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.key || null
  );
  const { addToCart } = useCart();

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
        <span className={styles.reviews}>
          ({product.views} Reviews)
        </span>
      </div>

      {/* PRICE */}
      <div className={styles.priceRow}>
        <span className={styles.price}>${product.price}</span>

        {product.oldPrice && (
          <span className={styles.oldPrice}>${product.oldPrice}</span>
        )}

        {product.discount && (
          <span className={styles.discount}>
            -{product.discount}%
          </span>
        )}
      </div>

      {/* DESCRIPTION */}
      <p className={styles.description}>{product.description}</p>

      <Line />
      
      {/* COLORS */}
      {product.colors?.length > 0 && (
        <div className={styles.colors}>
          <span>Colours:</span>
          <div className={styles.colorDots}>
            {product.colors.map((color) => (
              <span
                key={color.key}
                className={`${styles.dot} ${
                  selectedColor === color.key ? styles.active : ""
                }`}
                style={{ backgroundColor: color.color }}
                onClick={() => setSelectedColor(color.key)}
              />
            ))}
          </div>
        </div>
      )}

      {/* QUANTITY + ADD */}
      <div className={styles.actions}>
        <div className={styles.quantity}>
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>

        <button className={styles.addToCart} onClick={() => addToCart(product, quantity, selectedColor)}>
          Add To Cart
        </button>
      </div>

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
