import React from "react";
import { RiSendPlane2Line, RiFacebookFill, RiInstagramLine, RiTwitterXLine, RiLinkedinBoxFill } from "@remixicon/react";
import styles from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.col}>
        <div className={styles.logo}>Exclusive</div>
        <h3 className={styles.title}>Subscribe</h3>
        <p className={styles.text}>Get 10% off your first order</p>
        <div className={styles.subscribeBox}>
          <input type="email" placeholder="Enter your email" />
            <RiSendPlane2Line />
        </div>
      </div>

      <div className={styles.col}>
        <h3 className={styles.title}>Support</h3>
        <p className={styles.text}>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
        <p className={styles.text}>exclusive@gmail.com</p>
        <p className={styles.text}>+88015-88888-9999</p>
      </div>

      <div className={styles.col}>
        <h3 className={styles.title}>Account</h3>
        <p className={styles.text}>My Account</p>
        <p className={styles.text}>Login / Register</p>
        <p className={styles.text}>Cart</p>
        <p className={styles.text}>Wishlist</p>
        <p className={styles.text}>Shop</p>
      </div>
      <div className={styles.col}>
        <h3 className={styles.title}>Quick Link</h3>
        <p className={styles.text}>Privacy Policy</p>
        <p className={styles.text}>Terms Of Use</p>
        <p className={styles.text}>FAQ</p>
        <p className={styles.text}>Contact</p>
      </div>
      <div className={styles.col}>
        <h3 className={styles.title}>Download App</h3>
        <p className={styles.smallText}>Save $3 with App New User Only</p>
        <div className={styles.appRow}>
          <img src="/assets/qr.jpg" alt="QRCode" className={styles.qr} />

          <div className={styles.storeColumn}>
            <img src="/assets/appstore.png" alt="App Store" />
            <img src="/assets/googleplay.png" alt="Google Play" />
          </div>
        </div>
        <div className={styles.socialIcons}>
          <RiFacebookFill />
          <RiInstagramLine />
          <RiTwitterXLine />
          <RiLinkedinBoxFill />
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
