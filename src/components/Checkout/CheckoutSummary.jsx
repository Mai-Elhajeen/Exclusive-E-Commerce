import React from "react";
import PaymentMethod from "./PaymentMethod";
import { useCart } from "../../context/CartContext";
import styles from "./CheckoutSummary.module.css";

const CheckoutSummary = () => {
  const { cartItems, totalPrice } = useCart();
  const shipping = 0;
  const total = totalPrice + shipping;


  const handlePlaceOrder = () => {
    console.log("Order placed");
  };

  return (
    <aside className={styles.summary}>
      <div className={styles.products}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.product}>
            <img src={item.image} alt={item.title} />
            <span className={styles.title}>{item.title}</span>
            <span className={styles.price}>
              ${item.price * item.quantity}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.totals}>
        <div className={styles.row}>
          <span>Subtotal:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className={styles.row}>
          <span>Shipping:</span>
          <span>Free</span>
        </div>

        <div className={`${styles.row} ${styles.total}`}>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <PaymentMethod hideButton />

      <button className={styles.placeOrder} onClick={handlePlaceOrder}>
        Place Order
      </button>
    </aside>
  );
};

export default CheckoutSummary;
