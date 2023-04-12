import styles from "./EachClientTransaction.module.css";
import edit from "../assests/edit.svg";

const EachClientTransaction = (props) => {
  return (
    <div className={styles.head}>
      <p className={styles.client}>
        <img src={props.img} />
        {props.name}
      </p>
      <p>{props.send}</p>
      <p>{props.date}</p>
      <p>{props.interval}</p>
      <p>{props.amount}</p>
      <button className={styles.edit}>
        EDIT <img src={edit} />
      </button>
    </div>
  );
};

export default EachClientTransaction;
