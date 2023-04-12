import styles from "./App.module.css";
import Menu from "./components/Menu";
import Timeline from "./components/Timeline";
import User from "./components/User";
import Recur from "./components/RecurringInvoices";

function App() {
  return (
    <>
      <Menu />

      <div className={styles.rect}></div>

      <div className={styles.container}>
        <div className={styles.head}>
          <Timeline />
          <User />
        </div>
        <div className={styles.main}>
          <Recur />
        </div>
      </div>
    </>
  );
}

export default App;
