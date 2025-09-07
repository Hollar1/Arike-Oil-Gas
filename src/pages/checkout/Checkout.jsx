import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../checkout/checkout.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/button/Button";
import BottomBar from "../../components/bottomBar/BottomBar";
import {
  faCreditCard,
  faDollar,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
function Checkout() {
  return (
    <div className={styles.parent_wrapper}>
      <SubNavBar children={"Checkout"} />
      <div className={styles.wrapper}>
        <h3>Order Summary</h3>
        <main>
          <section>
            <article>
              <div>
                <FontAwesomeIcon icon={faFire} />
              </div>

              <div>
                <p>12kg Cylinder</p>
                <span>12-04-2025</span>
              </div>
            </article>

            <div>
              <b>₦5,500</b>
            </div>
          </section>

          <div>
            <p>Distance</p>
            <span>5.3 Miles</span>
          </div>

          <div>
            <p>Delivery Fee</p>
            <span>₦600</span>
          </div>
          <div>
            <p>Service Fee</p>
            <span>₦70</span>
          </div>

          <div>
            <p>Subtotal</p>
            <span>₦5,000</span>
          </div>
          <nav></nav>
          <strong>
            <p>Total</p>
            <span>₦6170.00</span>
          </strong>
        </main>

        <section className={styles.sec_01}>
          <article>
            <div>
              <FontAwesomeIcon icon={faCreditCard} />
              <p>Pay Online</p>
            </div>

            <div>
              {" "}
              <input type="radio" />
            </div>
          </article>
          <article>
            <div>
              <FontAwesomeIcon icon={faDollar} />
              <p>Pay on Delivery</p>
            </div>

            <div>
              {" "}
              <input type="radio" />
            </div>
          </article>
        </section>

        <section className={styles.sec_02}>
          <p>Estimate Delivery Time:</p>
          <span>30-45 minutes</span>
        </section>

        <section className={styles.sec_03}>
          <Button children={"Place Order"} />
        </section>
      </div>
      <BottomBar />
    </div>
  );
}

export default Checkout;
