import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../privacyPolicy/privacyPolicy.module.scss";

function PrivacyPolicy() {
  return (
    <div className={styles.parent_wrapper}>
      <header>
        <SubNavBar children={"Policy Privacy"} />
      </header>

      <div className={styles.wrapper}>
        <h3>Arike Oil & Gas Privacy Policy</h3>
        <p>Latest update 15th July, 2025</p>

        <section className={styles.sec_01}>
          <p>
            At Arike Oil and Gas, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy explain
            how we collect, use, and safeguard your data when you use our
            services.
          </p>

          <h3>Information We Collect</h3>
          <p>
            We collect information you provide directly,such as your name,
            contact details, and payment information. We also gather data
            automatically, including your device information and use patterns.{" "}
          </p>

          <h3>How We Use Your Information</h3>
          <p>
            Your information is used to provide and improve our services,
            process transactions, communicate with you, and personalize your
            experience. We may also use your data for marketing and promotional
            purpose, with your consent.
          </p>

          <h3>Data Security</h3>
          <p>
            We employ industry-standard security measures to protect your data
            from unauthorized access, disclosure, alteration, or destruction.
            These measures include encryption, access controls, and regular
            security assessments.
          </p>

          <h3>Your Right</h3>
          <p>
            You have the right to access, correct, or delete your personal
            information. You can also object to or restrict certain processing
            activities. To exercise these right, please contact us using the
            information below
          </p>

          <h3>Contact Us</h3>
          <p>
            if you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:{" "}
            <a href="mailto:admin@arikegas.com.ng">admin@arikegas.com.ng</a> or
            call us at <a href="tel:+2347067276727">+2347067276727</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
