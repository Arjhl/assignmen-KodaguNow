import styles from "./Menu.module.css";
import back from "../assests/back.svg";
import logo from "../assests/Logo.svg";
import Home from "../assests/Home-Icons.svg";
import Invoice from "../assests/invoice.svg";
import Customer from "../assests/customer.svg";
import Products from "../assests/Vector.svg";
import Recur from "../assests/recur.svg";
import Discount from "../assests/discount.svg";
import MenuOptions from "./Menu_options";

const Menu = (props) => {
  const backClickHandler = () => {
    console.log(window.screen.width);
    if (Number(window.screen.width) < 600) {
      document.querySelector("#menu").style.display = "none";
      document.querySelector("#menu").style.transform = "translateX(-100vw)";
    }
  };

  return (
    <div className={styles.menu} id="menu">
      <div className={styles.header}>
        <div className={styles.back} onClick={backClickHandler}>
          <img src={back} alt="back" />
        </div>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={styles.menu_options}>
        <MenuOptions img={Home} title="Home" />
        <MenuOptions img={Invoice} title="Invoices" />
        <MenuOptions img={Customer} title="Customers" />
        <MenuOptions img={Products} title="Products" />
        <MenuOptions img={Recur} title="Recurring" active="true" />
        <MenuOptions img={Discount} title="Discount" />
      </div>
    </div>
  );
};

export default Menu;
