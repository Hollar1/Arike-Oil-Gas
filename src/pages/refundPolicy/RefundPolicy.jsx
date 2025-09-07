import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../refundPolicy/refundPolicy.module.scss";
import customer_care from "../../assets/icons/customer_care.png";
import warning_care from "../../assets/icons/warning_icon1.png";
import wrong_location from "../../assets/icons/wrong_location_icon.png";
import stop_icon from "../../assets/icons/stop_icon.png";

function RefundPolicy() {
  return (
    <div className={styles.parent_wrapper}>
      <header>
        <SubNavBar children={"Refund Policy"} />
      </header>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <h3>Our Commitment to You</h3>
          <p>
            At GasNow, we strive to ensure your satisfaction with every
            purchase. If you encounter any issues with your order, such as
            damaged goods, incorrect items, or service-related problems, we are
            here to assist you. Please review our refund policy below.
          </p>
        </section>

        <section className={styles.sec_02}>
          <h3>Eligibility for Refunds</h3>

          <article>
            <div>
              <img src={warning_care} width={30} alt="" />
            </div>
            <div>
              <strong>Damaged Goods: </strong>
              If your order arrives damaged, please notify us within 24 hours of
              delivery with photographic evidence.
            </div>
          </article>

          <article>
            <div>
              <img src={wrong_location} width={30} alt="" />
            </div>
            <div>
              <strong>Incorrect Orders: </strong>
              If you receive an incorrect item, please contact us within 24
              hours of delivery to arrange for a return or exchange.
            </div>
          </article>

          <article>
            <div>
              <img src={customer_care} width={30} alt="" />
            </div>
            <div>
              <strong>Service Issues: </strong>
              If you experience significant issues with our delivery service,
              such as excessive delays or non-delivery, please contact us.
            </div>
          </article>
        </section>

        <section className={styles.sec_03}>
          <h3>Non-Refundable Items</h3>

          <article>
            <div>
              <img src={stop_icon} width={30} alt="" />
            </div>
            <div>
              <strong>Used or Partially Used Gas Cylinders: </strong>
              Once a gas cylinder has been used, it cannot be returned or
              refunded.
            </div>
          </article>

          <article>
            <div>
              <img src={stop_icon} width={30} alt="" />
            </div>
            <div>
              <strong>
                <strong>Services Completed:</strong>{" "}
              </strong>
              Delivery fees and other service charges are non-refundable once
              the service has been completed.
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default RefundPolicy;
