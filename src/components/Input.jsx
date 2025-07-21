import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <h3>{props.inputText}</h3>
      <input
        className={styles.input}
        type={props.inputType}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
};

export default Input;
