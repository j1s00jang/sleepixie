import styles from "@/components/ui/HeaderComponent.module.css";
import Image from "next/image";
import Link from "next/link";

const HeaderComponent = ({ pageName, pageLink, onClick }) => {
  return (
    <div className={styles.settingHeader}>
      <div className={styles.left}>
        {onClick ? (
          <button
            onClick={onClick}
            className={styles.arrowButton}
            aria-label="Back"
          >
            <Image
              src="/icons/CaretLeft.svg"
              alt="arrow-left"
              width={32}
              height={32}
            />
          </button>
        ) : (
          <Link href={pageLink}>
            <Image
              src="/icons/CaretLeft.svg"
              alt="arrow-left"
              width={32}
              height={32}
            />
          </Link>
        )}
      </div>
      <div className={styles.center}>
        <h4>{pageName}</h4>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default HeaderComponent;
