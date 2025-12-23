import styles from "./PaymentMethod.module.css";

const PaymentMethod = ({ hideButton }) => {
  return (
    <>
      <div className={styles.methods}>
        <div className={styles.method}>
          <div className={styles.options}>
            <img src="./assets/payment1.png" alt="payment" />
            <img src="./assets/payment2.png" alt="payment" />
            <img src="./assets/payment3.png" alt="payment" />
            <img src="./assets/payment4.png" alt="payment" />
          </div>
          <div className={styles.input}>
            <label>
              <input type="radio" name="payment" />
              Bank
            </label>
          </div>
        </div>

        <label>
          <input type="radio" name="payment" defaultChecked />
          Cash on delivery
        </label>
      </div>
      <div className={styles.coupon}>
        <input type="text" placeholder="Coupon Code" />
        <button>Apply Coupon</button>
      </div>
      {!hideButton && <button className={styles.orderBtn}>Place Order</button>}{" "}
    </>
  );
};

export default PaymentMethod;
