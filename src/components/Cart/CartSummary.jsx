import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./CartSummary.module.css";

const CartSummary = () => {
  const { cartItems } = useCart();
  const [code, setCode] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 0 : 0; // Free shipping
  const total = subtotal + shipping;

  const handleApply = () => {
    if (!code.trim()) return;
    alert("Coupon applied: " + code);
  };

  return (
    <div className={styles.cartSummary}>
      <div className={styles.detailsBox}>
        <h3>Cart Total</h3>

        <div className={styles.row}>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className={styles.row}>
          <span>Shipping:</span>
          <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
        </div>

        <div className={`${styles.row} ${styles.total}`}>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Link
          to={cartItems.length ? "/checkout" : "#"}
          className={`${styles.checkoutBtn} ${
            !cartItems.length ? styles.disabled : ""
          }`}
        >
          Proceed to Checkout
        </Link>
      </div>
      <div className={styles.coupon}>
        <input
          type="text"
          placeholder="Coupon Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={handleApply}>Apply Coupon</button>
      </div>
    </div>
  );
};

export default CartSummary;
