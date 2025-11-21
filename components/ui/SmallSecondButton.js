import styles from "./SmallSecondButton.module.css";

const SmallSecondButton = ({ label, onClick }) => {
  return (
    <button className={styles.smallSecondButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default SmallSecondButton;
