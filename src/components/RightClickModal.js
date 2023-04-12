import styles from "./RightClickModal.module.css";

const RightClickModal = (props) => {
  return (
    <h1 className={styles.module} id="right_child">
      <p>Pause</p>
      <p>Duplicate</p>
      <p>Edit</p>
      <p>Terminate</p>
      <p>Skip next date</p>
    </h1>
  );
};

export default RightClickModal;
