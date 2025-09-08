import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../refundPolicy/refundPolicy.module.scss";
import customer_care from "../../assets/icons/customer_care.png";
import warning_care from "../../assets/icons/warning_icon1.png";
import wrong_location from "../../assets/icons/wrong_location_icon.png";
import stop_icon from "../../assets/icons/stop_icon.png";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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

        <section className={styles.sec_04}>
          <h3>Refund Request Process</h3>
          <div>
            1. <strong>Contact Us:</strong> Reach out to our customer support
            team via phone or email within the specified timeframes.
          </div>

          <div>
            2. <strong>Contact Us:</strong> Provide your order number, a
            detailed description of the issue, and any supporting evidence
            (e.g., photos).
          </div>

          <div>
            3. <strong>Assessment:</strong> Our team will assess your request
            and may require additional information.
          </div>

          <div>
            4. <strong>Resolution:</strong>If approved, we will process the
            refund to your original payment method.
          </div>
        </section>

        <section className={styles.sec_05}>
          <h3>Refund Processing Timeline</h3>
          Refunds are typically processed within
          <strong> 7-10 business days</strong>
          from the date of approval. Please note that the exact timing may vary
          depending on your payment provider. You will receive a notification
          once your refund has been processed.
        </section>

        <section className={styles.sec_06}>
          <h3>Contact Us</h3>
          <div>
            If you have any questions or need to request a refund, please
            contact our customer support team:
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a className={styles.href} href="tel:+2347067276727">
              +2347067276727
            </a>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a className={styles.href} href="mailto:admin@arikegas.com.ng">
              admin@arikegas.com.ng
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default RefundPolicy;
