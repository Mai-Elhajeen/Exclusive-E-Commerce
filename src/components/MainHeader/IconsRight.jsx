import React, { useState } from "react";
import {
  RiSearchLine,
  RiHeartLine,
  RiShoppingCart2Line,
  RiUser3Line,
  RiShoppingBag2Line,
  RiCloseCircleLine,
  RiStarLine,
  RiLogoutBoxLine,
} from "@remixicon/react";

import styles from "./IconsRight.module.css";
import { useCart } from "../../context/CartContext";

const IconsRight = ({
  showSearch,
  showFavorite,
  showCart,
  showUser,
  countFavorite,
}) => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={styles.right}>
      {showSearch && (
        <div className={styles.searchBox}>
          <input type="text" placeholder="What are you looking for?" />
          <RiSearchLine />
        </div>
      )}
      {showFavorite && (
        <div className={styles.iconBox}>
          <RiHeartLine />
          {countFavorite > 0 && (
            <span className={styles.count}>{countFavorite}</span>
          )}
        </div>
      )}

      {showCart && (
        <div className={styles.iconBox}>
          <RiShoppingCart2Line />
          {cartCount > 0 && <span className={styles.count}>{cartCount}</span>}
        </div>
      )}

      {showUser && (
        <div className={styles.userBox}>
          <RiUser3Line
            onClick={() => setOpenUserMenu(!openUserMenu)}
            className={openUserMenu ? styles.activeUserIcon : ""}
          />
          {openUserMenu && (
            <ul className={styles.dropdown}>
              <li>
                <RiUser3Line />
                <span>Manage My Account</span>
              </li>
              <li>
                <RiShoppingBag2Line />
                <span>My Order</span>
              </li>
              <li>
                <RiCloseCircleLine />
                <span>My Cancellations</span>
              </li>
              <li>
                <RiStarLine />
                <span>My Reviews</span>
              </li>
              <li>
                <RiLogoutBoxLine />
                <span>Logout</span>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default IconsRight;
