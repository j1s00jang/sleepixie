import styles from "@/components/ui/Button.module.css";
import Image from "next/image";
import Link from "next/link";

const TwoButton = ({ label1, label2, pageLink }) => {
  // Handler for disabled Water Setting
  const handleDisabledClick = (e) => {
    e.preventDefault();
    alert(
      "This button is disabled due to scope width. This would be implemented later on, in the same way supplements setting works, with altered customizations appropriate to their namesake."
    );
  };
  return (
    <div className={styles.twoButtonContainer}>
      <button className={styles.twoButtonTop}>
        <div className={styles.buttonContent}>
          <span>{label1}</span>
          <Link href={pageLink}>
            <Image
              src="/icons/CaretRight.svg"
              alt="arrow-right"
              width={24}
              height={24}
              className={styles.arrowIcon}
            />
          </Link>
        </div>
      </button>
      <button
        className={`${styles.twoButtonBottom} ${styles.disabledButton}`}
        onClick={handleDisabledClick}
      >
        <div className={styles.buttonContent}>
          <span>{label2}</span>
          <Image
            src="/icons/CaretRight.svg"
            alt="arrow-right"
            width={24}
            height={24}
            className={styles.arrowIcon}
          />
        </div>
      </button>
    </div>
  );
};

export default TwoButton;
