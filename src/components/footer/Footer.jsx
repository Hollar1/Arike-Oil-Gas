import { useNavigate } from "react-router-dom";
import styles from "../footer/footer.module.scss";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <footer>
        <h3>Arike Gas</h3>
        <p>
          Your trusted partner for fast and reliable cooking gas delivery in
          Nigeria.
        </p>
        <article>
          {/* <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> */}
        </article>
        <h3>Quick Links</h3>
        <p
          onClick={() => {
            navigate("/order");
          }}
        >
          Oder Gas
        </p>
        <p
          onClick={() => {
            navigate("/cylinder");
          }}
        >
          Cylinder Exchange
        </p>

        <p>
          <a className={styles.href} href="#sec_06">
            Delivery Areas
          </a>
        </p>
        <p
          onClick={() => {
            navigate("/career");
          }}
        >
          Job Vacancy
        </p>

        <p>
          <a className={styles.href} href="#sec_07">
            FAQs
          </a>
        </p>

        <h3>Legal</h3>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Refund Policy</p>

        <h3>Newsletter</h3>
        <p>Subscribe for updates and special offers</p>
        <div>
          <input type="text" name="" id="" placeholder="Your Email" />
          <button>Sign-Up</button>
        </div>
        <hr />
        <i> &copy; 2025 Arike Gas Nigeria All Right Reserved.</i>
      </footer>
    </div>
  );
}

export default Footer;
