import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import styles from "./CartTable.module.css";

const CartTable = () => {
  const { cartItems } = useCart();

  return (
    <>
        <div className={styles.table}>
      {/* Header */}
      <div className={styles.header}>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {/* Items */}
      {cartItems.length === 0 ? (
        <div className={styles.empty}>
          <p>Your cart is empty</p>
        </div>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
            item={item}
          />
        ))
      )}
    </div>
    <div className={styles.btns}>
        <Link to="/" className={styles.returnBtn}>
        Return To Shop
      </Link>
      <button className={styles.updateBtn}>
        Update Cart
      </button>
    </div>
    </>
  );
};

export default CartTable;
