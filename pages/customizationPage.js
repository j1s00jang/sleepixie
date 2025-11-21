"use client";

import Image from "next/image";
import PrimaryButton from "@/components/ui/Button";
import CharacterCard2 from "@/components/feature/CharacterCard2";
import HeaderComponent from "@/components/ui/HeaderComponent";
import styles from "@/styles/SupplementPage.module.css";
import NavigationBar from "@/components/layout/NavigationBar";
import { useRouter } from "next/navigation";

export default function CustomizingPage() {
  const router = useRouter();
  return (
    <div className={styles.mobileContainer}>
      <main
        className="mainContainer"
        style={{
          overflowY: "auto",
          paddingBottom: 100,
          height: "100%",
        }}
      >
        <HeaderComponent
          pageName="Mascot Customization"
          pageLink="/character"
        />
        <CharacterCard2 />
        <div>
          <p className="colorTheme">Color Theme</p>
        </div>
        <div className="colorChipContainer">
          <Image
            src="/images/colorChip1.png"
            alt="colorChip1"
            width={82}
            height={82}
          />
          <Image
            src="/images/colorChip2.png"
            alt="colorChip2"
            width={82}
            height={82}
          />
          <Image
            src="/images/colorChip3.png"
            alt="colorChip3"
            width={82}
            height={82}
          />
          <Image
            src="/images/colorChip4.png"
            alt="colorChip4"
            width={82}
            height={82}
          />
        </div>
      </main>

      <nav className={styles.navigationBarGlobal}>
        <NavigationBar
          sleepIcon="/icons/StarAndCrescent.svg"
          achievementIcon="/icons/CrownSelected.svg"
          profileIcon="/icons/UserCircle.svg"
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </nav>
    </div>
  );
}
