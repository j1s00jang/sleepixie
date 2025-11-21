import styles from "@/components/ui/PageHeaderComponent.module.css";
import Image from "next/image";
import Link from "next/link";

const PageHeaderComponent = ({ pageName }) => {
  return (
    <div className={styles.settingHeader}>
      <h3>{pageName}</h3>
    </div>
  );
};

export default PageHeaderComponent;
