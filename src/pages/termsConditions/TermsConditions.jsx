import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../termsConditions/termsConditions.module.scss";

function TermsConditions() {
  return (
    <div className={styles.parent_wrapper}>
      <header>
        <SubNavBar children={"Terms & Conditions"} />
      </header>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <h3>
            Arike Oil and Gas Terms and Conditions{" "}
            <p>Last update October 25, 2025</p>
          </h3>

          <span>
            Welcome to Arike Oil and Gas! By using our services, you agree to
            the following terms and conditions. Please read them carefully.
          </span>
        </section>

        <section className={styles.sec_02}>
          <h3>1. Acceptance of Terms</h3>

          <p>
            {" "}
            By accessing or using the Arike Oil and Gas mobile application and
            services, you agree to be bound by these Terms and Conditions. If
            you do not agree to these terms, please do not use our services.
          </p>

          <h3>2. User Responsibility</h3>

          <p>
            {" "}
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account. You agree to provide accurate and complete information when
            creating your account and using our services.
          </p>

          <h3>3. Acceptable Use</h3>

          <p>
            {" "}
            You agree to use our services only for lawful purposes and in a
            manner that does not infringe the rights of, restrict, or inhibit
            anyone else's use and enjoyment of the services. Prohibited behavior
            includes harassing or causing distress or inconvenience to any other
            user, transmitting obscene or offensive content, or disrupting the
            normal flow of dialogue within our services.
          </p>

          <h3>4. Intellectual Property</h3>

          <p>
            {" "}
            All content, trademarks, and data on the Arike Oil and Gas
            application, including but not limited to software, databases, text,
            graphics, icons, and hyperlinks, are the property of Arike Oil and
            Gas or its licensors and are protected by intellectual property
            laws. You may not copy, reproduce, distribute, or create derivative
            works from our content without our express written permission.
          </p>

          <h3>5. Disclaimers</h3>

          <p>
            {" "}
            Our services are provided on an 'as is' and 'as available' basis. We
            make no warranties, express or implied, regarding the operation or
            availability of our services, or the information, content,
            materials, or products included on our application. You expressly
            agree that your use of our services is at your sole risk.
          </p>

          <h3>6. Limited of Liability</h3>

          <p>
            {" "}
            Arike Oil and Gas will not be liable for any damages of any kind
            arising from the use of our services, including but not limited to
            direct, indirect, incidental, punitive, and consequential damages,
            unless otherwise specified in writing.
          </p>

          <h3>7. Dispute Resolution</h3>

          <p>
            {" "}
            Any disputes arising out of or relating to these Terms and
            Conditions or our services shall be resolved through mediation or
            arbitration in accordance with the laws of Nigeria. The decision of
            the arbitrator shall be final and binding on both parties.
          </p>

          <h3>8. Change to Terms</h3>

          <p>
            {" "}
            We reserve the right to modify these Terms and Conditions at any
            time. We will notify you of any significant changes by posting the
            new terms on our application. Your continued use of our services
            after such changes constitutes your acceptance of the new terms.
          </p>

          <h3>9. Contact Us</h3>

          <p>
            {" "}
            If you have any questions about these Terms and Conditions, please
            contact us at
            <a className={styles.href} href="">admin@arikegas.com.ng</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsConditions;
