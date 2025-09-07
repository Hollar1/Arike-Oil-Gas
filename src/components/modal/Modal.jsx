import styles from "../modal/modal.module.scss";
import thumb_icon from "../../assets/icons/thumb_icon.png";
import failed_icon from "../../assets/icons/failed_icon.png";
export const Success_modal = ({}) => {
  return (
    <div className={styles.successModal_wrapper}>
      <section>
        <img src={thumb_icon} alt="" />
        <h3>Account created successfully!</h3>
        <p>Your account has been successfully created.</p>
        <p>You can now start ordering gas.</p>

        <div>
          <button>Login</button>
          <button>Go to Home</button>
        </div>
      </section>
    </div>
  );
};

export const Failed_modal = ({}) => {
  return (
    <div className={styles.failedModal_wrapper}>
      <section>
        <img src={failed_icon} alt="" />
        <h3>Sign Up Failed!</h3>
        <p>
          We couldn't complete your sign up. This might be due to a few reasons:
        </p>
        <ul>
          <li>The email address is already in use</li>
          <li>Your chosen password is too weak</li>
          <li>A network error occurred</li>
        </ul>
        <div>
          <button>Try Again</button>
          <button>Contact Us</button>
        </div>
      </section>
    </div>
  );
};
