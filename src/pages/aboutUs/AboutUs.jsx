import BottomBar from "../../components/bottomBar/BottomBar";
import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../aboutUs/aboutUs.module.scss";
import rocket_icon from "../../assets/icons/rocket_icon.png";
import customer_icon from "../../assets/icons/customer_icon.png";
import innovation_icon from "../../assets/icons/innovation_icon.png";
import reliability_icon from "../../assets/icons/reliability_icon.png";
import safety_icon from "../../assets/icons/safety_icon.png";
function AboutUs() {
  return (
    <div className={styles.parent_wrapper}>
      <header>
        <SubNavBar children={"About Us"} />
      </header>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <h3>Arike Oil & Gas</h3>
          <p>Order with ease. Cook with confidence.</p>
        </section>
        <section className={styles.sec_02}>
          <h3>About Our Company</h3>
          <p>
            Arike Oil and gas is a leading and first prover of reliable,
            high-quality gas solutions in Ilorin, Kwara State. With years of
            experience in the energy sector, we are committed to deliver safe,
            efficiency, and convenient gas services to our customers.
          </p>
        </section>
        <section className={styles.sec_03}>
          <div>
            <img src={rocket_icon} alt="" />
            <h3>Our Mission</h3>
          </div>
          <p>
            Our mission is to ensure uninterrupted access to clean, safe, and
            affordable gas with exceptional services for both domestic and
            commercial needs. We strive to be the preferred choice for gas
            supply in Ilorin and it's surroundings, known for our reliable and
            customer-centric approach.
          </p>
        </section>

        <section className={styles.sec_04}>
          <h3>Our Core Values</h3>

          <article>
            <img src={safety_icon} width={28} alt="" />
            <div>
              <b>Safety First</b>
              <p>
                We prioritize the safety of our customers, employees, and the
                community in all our operations.
              </p>
            </div>
          </article>

          <article>
            <img src={reliability_icon} width={28} alt="" />
            <div>
              <b> Reliability</b>
              <p>
                We are committed to provide a consistent and dependable supply
                of gas to meet your needs.
              </p>
            </div>
          </article>

          <article>
            <img src={customer_icon} width={28} alt="" />
            <div>
              <b>Customer Focus</b>
              <p>
                Our customers are at the heart of everything we do. We strive to
                exceed their expectations.
              </p>
            </div>
          </article>

          <article>
            <img src={innovation_icon} width={30} alt="" />
            <div>
              <b>Innovation</b>
              <p>
                We embrace innovation to improve our services and deliver
                greater value to our customers.
              </p>
            </div>
          </article>
        </section>
      </div>
      <BottomBar />
    </div>
  );
}

export default AboutUs;
