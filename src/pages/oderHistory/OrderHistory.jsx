import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../oderHistory/orderHistory.module.scss";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import BottomBar from "../../components/bottomBar/BottomBar";
import SubNavBar from "../../components/subNavBar/SubNavBar";
function OrderHistory() {
  return (
    <div className={styles.parent_wrapper}>
      <SubNavBar children={"Order Histories"} />
      <div className={styles.wrapper}>
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
              <span className={styles.delivered}>Delivered</span>
            </div>
          </section>
          <nav></nav>




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
          <strong>
            <p>Total</p>
            <span>₦6170.00</span>
          </strong>
        </main>

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
              <span className={styles.cancelled}>Cancelled</span>
            </div>
          </section>
          <nav></nav>

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
          <strong>
            <p>Total</p>
            <span>₦6170.00</span>
          </strong>
        </main>

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
              <span className={styles.delivered}>Delivered</span>
            </div>
          </section>
          <nav></nav>

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
          <strong>
            <p>Total</p>
            <span>₦6170.00</span>
          </strong>
        </main>
        <div>
          <button>View More Orders</button>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default OrderHistory;
