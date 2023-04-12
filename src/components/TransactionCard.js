import styles from "./TransactionCard.module.css";

const TransactionCard = (props) => {
  return (
    <div className={styles[props.state]}>
      <p className={styles.transaction_type}>{props.type}</p>
      <p className={styles.amount}>{props.amount}</p>
    </div>
  );
};

export default TransactionCard;
