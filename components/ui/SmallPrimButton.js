import styles from "./SmallPrimButton.module.css";
import Image from "next/image";

const SmallPrimButton = ({ label, onClick }) => {
  return (
    <button className={styles.smallPrimButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default SmallPrimButton;
