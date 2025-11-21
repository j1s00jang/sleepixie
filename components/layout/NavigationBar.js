import styles from "@/components/layout/NavigationBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationBar = ({
  pageName,
  pageName2,
  pageName3,
  sleepIcon,
  achievementIcon,
  profileIcon,
}) => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div className={styles.navigationBar}>
      <div className={styles.navigationBarSleep}>
        <Image
          src={sleepIcon}
          alt="arrow-left"
          width={25}
          height={25}
          style={{ width: 25, height: 25 }}
        />
        <Link
          href="/"
          className={`${styles.pageName} ${isActive("/") ? styles.active : ""}`}
        >
          {pageName}
        </Link>
      </div>
      <div className={styles.navigationBarAchievement}>
        <Image
          src={achievementIcon}
          alt="arrow-left"
          width={25}
          height={25}
          style={{ width: 25, height: 25 }}
        />
        <Link
          href="/achievements"
          className={`${styles.pageName2} ${
            isActive("/achievements") ? styles.active : ""
          }`}
        >
          {pageName2}
        </Link>
      </div>
      <div className={styles.navigationBarProfile}>
        <Image
          src={profileIcon}
          alt="arrow-left"
          width={25}
          height={25}
          style={{ width: 25, height: 25 }}
        />
        <Link
          href="/profilePage"
          className={`${styles.pageName3} ${
            isActive("/profilePage") ? styles.active : ""
          }`}
        >
          {pageName3}
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
