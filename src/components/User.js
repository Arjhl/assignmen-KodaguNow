import styles from "./User.module.css";
import UserImg from "../assests/user.png";

const User = (props) => {
  const hamburgerClick = () => {
    document.querySelector("#menu").style.display = "block";
    document.querySelector("#menu").style.transform = "translateX(0vw)";
  };

  return (
    <div className={styles.container}>
      <button className={styles.hamburger} onClick={hamburgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <img src={UserImg} alt="user" className={styles.images} />
      <p className={styles.text}>Arjun kkkkkkkkkkkk</p>
    </div>
  );
};

export default User;
