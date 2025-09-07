import Button from "../../components/button/Button";
import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../contactUs/contactUs.module.scss";
import call_icon from "../../assets/icons/call_icon.png";
import email_icon from "../../assets/icons/email_icon.png";
import whatsapp_icon from "../../assets/icons/whatsapp_icon.png";
import BottomBar from "../../components/bottomBar/BottomBar";
function ContactUs() {
  return (
    <div className={styles.parent_wrapper}>
      <SubNavBar children={"Contact Us"} />
      <div className={styles.wrapper}>
        <header>
          <h3>We're here to help</h3>
          <p>Contact us with any questions — we're here to help.</p>
        </header>

        <section className={styles.sec_01}>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <Button children={"Send Message"} />
        </section>

        <section className={styles.sec_02}>
          <header>
            <h3>Other ways to reach us</h3>
          </header>

          <article>
            <div>
              <img src={call_icon} alt="" /> <p>Phone</p>
            </div>
            <span>+2347067276727</span>
          </article>

          <article>
            <div>
              <img src={whatsapp_icon} alt="" /> <p>Whatsapp</p>
            </div>
            <span>+2347067276727</span>
          </article>

          <article>
            <div>
              <img src={email_icon} alt="" /> <p>Email</p>
            </div>
            <a href="" className={styles.href}>
              admin@mybusiness.org
            </a>
          </article>
        </section>
      </div>
      <BottomBar />
    </div>
  );
}

export default ContactUs;
