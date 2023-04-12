import styles from "./ClientTransaction.module.css";
import EachClientTransaction from "./EachClientTransaction";
import { useState } from "react";
import client from "../assests/client.svg";
import RightClickModal from "./RightClickModal";

const ClientTransactions = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={styles.container}
      onContextMenu={(e) => {
        setIsClicked(true);
        const backdrop = document.querySelector("#backdrop");
        backdrop.style.display = "block";
        e.preventDefault();
        // console.log(e);
        // console.log(e.pageX + "px", e.pageY + "px");

        const right = document.querySelector("#right");

        if (right) {
          right.style.top = e.pageY + "px";
          right.style.left = e.pageX + "px";
        }
      }}
    >
      <div
        id="backdrop"
        onClick={(e) => {
          console.log(document);
          if (e.target.id === "right_child") {
            return;
          }
          setIsClicked(false);
          document.querySelector("#backdrop").style.display = "none";
        }}
      >
        <div id="right">{isClicked && <RightClickModal />}</div>
      </div>
      <div className={styles.head}>
        <p className={styles.client}>Client</p>
        <p># SEND</p>
        <p>END DATE</p>
        <p>INTERVAL</p>
        <p>AMOUNT</p>
        <p className={styles.edit}>EDIT</p>
      </div>
      <EachClientTransaction
        img={client}
        name="MadeByMack"
        amount="€3000"
        send="25"
        date="24-20-2024"
        interval="3/month"
      />
      <EachClientTransaction
        img={client}
        name="MadeByMack1"
        amount="€3000"
        send="25"
        date="24-20-2024"
        interval="3/month"
      />
      <EachClientTransaction
        img={client}
        name="MadeByMack2"
        amount="€3000"
        send="25"
        date="24-20-2024"
        interval="3/month"
      />
      <EachClientTransaction
        img={client}
        name="MadeByMack3"
        amount="€3000"
        send="25"
        date="24-20-2024"
        interval="3/month"
      />
      <EachClientTransaction
        img={client}
        name="MadeByMack"
        amount="€3000"
        send="25"
        date="24-20-2024"
        interval="3/month"
      />
      <EachClientTransaction
        img={client}
        name="MadeByMack"
        amount="€3000"
        send="25"
        date="24-20-2024"
        interval="3/month"
      />
    </div>
  );
};
export default ClientTransactions;
