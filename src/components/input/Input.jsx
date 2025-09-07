import styles from "../input/input.module.scss";

function Input({
  label_text,
  placeholder,
  value,
  onChange,
  type,
  name,
  spread,
}) {
  return (
    <div className={styles.wrapper}>
      <label>
        {label_text}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          {...spread} // <-- spread applied here
        />
      </label>
    </div>
  );
}

export default Input;
