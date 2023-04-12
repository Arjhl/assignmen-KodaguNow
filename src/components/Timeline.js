import styles from "./Timeline.module.css";
import TransactionCard from "./TransactionCard";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <p className={styles.text}> Last 30 Days:</p>
      <TransactionCard state="deposit" type="DEPOSIT" amount="€24.000" />
      <TransactionCard state="pending" type="PENDING" amount="€41.000" />
      <TransactionCard state="overdue" type="OVERDUE" amount="€65.600" />
    </div>
  );
};

export default Timeline;
