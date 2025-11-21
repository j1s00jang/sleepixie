import styles from "@/components/ui/Button.module.css";
import Image from "next/image";
import Link from "next/link";

const ThreeButton = ({ label1, label2, label3, pageLink }) => {
  return (
    <div className={styles.threeButtonContainer}>
      <button className={styles.threeButtonTop}>
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
      <button className={styles.threeButtonMiddle}>
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
      <button className={styles.threeButtonBottom}>
        <div className={styles.buttonContent}>
          <span>{label3}</span>
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

export default ThreeButton;
