import styles from "./MenuOptions.module.css";

const MenuOptions = (props) => {
  return (
    <div className={`${styles.option} + ${props.active ? styles.active : ""}`}>
      <img src={props.img} className={styles.icon} />
      <p className={styles.text}>{props.title}</p>
    </div>
  );
};

export default MenuOptions;
