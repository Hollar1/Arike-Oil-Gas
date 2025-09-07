import styles from "../button/button.module.scss";

function Button({ children, type, onClick }) {
  return (
    <div className={styles.parent_wrapper}>
      <div className={styles.wrapper}>
        <button type={type} onClick={onClick}>
          {children}
        </button>
      </div>
    </div>
  );
}

export default Button;
