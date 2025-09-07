import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../pay_deposit/pay_deposit.module.scss";
import cylinder from "../../assets/images/cylinder_3kg_.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadSideCough } from "@fortawesome/free-solid-svg-icons";
import warning_icon from "../../assets/icons/warning_icon.png";
import Button from "../../components/button/Button";
function Pay_deposit() {
  return (
    <div className={styles.parent_wrapper}>
      <header>
        <SubNavBar children={"Make Deposit"} />
      </header>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <h3>Cylinder Sizes</h3>

          <article>
            <img src={cylinder} alt="" />
            <div>
              <p>Gas Cylinder</p>
              <span>3kg</span>
            </div>
          </article>
        </section>

        <section className={styles.sec_02}>
          <h3>Order Summary</h3>

          <article>
            <div>
              <p>Holding Fee</p>
              <span>₦3,000</span>
            </div>

            <div>
              <p>Service Fee</p>
              <span>₦100</span>
            </div>

            <div>
              <p>Subtotal</p>
              <span>₦3,000</span>
            </div>
            <nav></nav>

            <strong>
              <p>Total</p>
              <p>₦3,100</p>
            </strong>
          </article>
        </section>

        <section className={styles.sec_03}>
          <article>
            <div>
              <h3>Refundable Amount</h3> <strong>₦3,000</strong>
            </div>
          </article>
          <img src={warning_icon} alt="" />
        </section>

        {/* <section className={styles.sec_04}>
          <h3>Payment Method</h3>
          <label>
            Online Payment
            <input type="radio" />
          </label>
          <label>
            Transfer
            <input type="radio" />
          </label>
        </section> */}

        <section className={styles.sec_05}>
          <Button children={"Proceed to Payment"} />
        </section>
      </div>
    </div>
  );
}

export default Pay_deposit;
