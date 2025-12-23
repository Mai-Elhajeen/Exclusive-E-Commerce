import React from "react";
import { RiCloseCircleLine } from "@remixicon/react";
import { useCart } from "../../context/CartContext";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className={styles.row}>
      <div className={styles.product}>
        <button
          className={styles.remove}
          onClick={() =>
            removeFromCart(item.id, item.selectedColor, item.selectedSize)
          }
        >
          <RiCloseCircleLine />
        </button>

        <img src={item.image} alt={item.title} />
        <div>
          <p>{item.title}</p>
          {item.selectedColor && <small>Color: {item.selectedColor}</small>}
          {item.selectedSize && <small>Size: {item.selectedSize}</small>}
        </div>
      </div>

      <span>${item.price}</span>

      <div className={styles.quantity}>
        <button
          onClick={() =>
            updateQuantity(
              item.id,
              item.selectedColor,
              item.selectedSize,
              item.quantity - 1,
            Math.max(1, item.quantity - 1)
            )
          }
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() =>
            updateQuantity(
              item.id,
              item.selectedColor,
              item.selectedSize,
              item.quantity + 1,
            )
          }
        >
          +
        </button>
      </div>

      <span>${item.price * item.quantity}</span>
    </div>
  );
};

export default CartItem;
