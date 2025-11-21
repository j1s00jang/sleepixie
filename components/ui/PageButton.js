import styles from "@/components/ui/Button.module.css";
import Image from "next/image";

const PageButton = ({ label, disabled }) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      alert(
        "This button is disabled due to the demo's limited scope. This would be implemented later on, in the same way supplements setting works, with altered customizations appropriate to their namesake."
      );
    }
  };
  return (
    <button
      className={`${styles.pageButton} ${
        disabled ? styles.disabledButton : ""
      }`}
      onClick={handleClick}
    >
      <div className={styles.buttonContent}>
        <span>{label}</span>
        <Image
          src="/icons/CaretRight.svg"
          alt="arrow-right"
          width={24}
          height={24}
          className={styles.arrowIcon}
        />
      </div>
    </button>
  );
};

export default PageButton;
