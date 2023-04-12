import styles from "./RecurringInvoices.module.css";
import search from "../assests/search.svg";
import plus from "../assests/plus.svg";
import ClientTransactions from "./ClientTransaction";

const Recur = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>Recurring Invoices</h1>
        <button>
          Add Recurring Invoice <img src={plus} />
        </button>
      </div>
      <div className={styles.card_parent}>
        <div className={styles.card}>
          <p className={styles.card_head}># RECURRING INVOICES</p>
          <p className={styles.card_num}>215</p>
        </div>
        <div className={styles.card}>
          <p className={styles.card_head}>RECURRING REVENUE</p>
          <p className={styles.card_num}>€2500/month</p>
        </div>
        <div className={styles.card}>
          <p className={styles.card_head}>RECURRING OVERDUE</p>
          <p className={styles.card_num}>22</p>
        </div>
      </div>
      <div className={styles.recur_list}>
        <p className={styles.recur_list_head}>Per client</p>
        <div className={styles.search}>
          <input placeholder="Search client" />
          <button>
            Search <img src={search} />
          </button>
        </div>
      </div>
      <ClientTransactions />
    </div>
  );
};

export default Recur;
