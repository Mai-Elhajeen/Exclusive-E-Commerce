import styles from "./BillingForm.module.css";

const BillingForm = () => {
  return (
    <form className={styles.form}>
      <h2>Billing Details</h2>

      <label>
        First Name*
        <input type="text" required />
      </label>

      <label>
        Company Name
        <input type="text" />
      </label>

      <label>
        Street Address*
        <input type="text" required />
      </label>

      <label>
        Apartment, floor, etc. (optional)
        <input type="text" />
      </label>

      <label>
        Town/City*
        <input type="text" required />
      </label>

      <label>
        Phone Number*
        <input type="tel" required />
      </label>

      <label>
        Email Address*
        <input type="email" required />
      </label>

      <label className={styles.checkbox}>
        <input type="checkbox" />
        Save this information for faster check-out next time
      </label>
    </form>
  );
};

export default BillingForm;
