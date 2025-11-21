"use client";

import PageButton from "@/components/ui/PageButton";
import TwoButton from "@/components/ui/TwoButton";
import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Link from "next/link";
import HeaderComponent from "@/components/ui/HeaderComponent";
import SmallPrimButton from "@/components/ui/SmallPrimButton";
import SmallSecondButton from "@/components/ui/SmallSecondButton";
import styles from "@/styles/SupplementPage.module.css";

export default function GoalSettingPage() {
  return (
    <div className={styles.mobileContainer}>
      {/* Scrollable main content area */}

      <main
        className="mainContainer"
        style={{
          overflowY: "auto",
          paddingBottom: 100,
          height: "100%",
        }}
      >
        <div className="settingHeader">
          <HeaderComponent pageName="Goal Setting" pageLink="/achievements" />
        </div>
        <div className="buttonContainer">
          <p className="settingLabels">Sleep</p>
          <div>
            <PageButton label="Bedtime Setting" disabled={true} />
          </div>
        </div>
        <div className="buttonContainer">
          <p className="settingLabels">Additional</p>
          <div>
            <TwoButton
              label1="Supplements Setting"
              label2="Water Setting"
              pageLink="/supplementPage"
            />
          </div>
        </div>
      </main>

      {/* Fixed navigation bar at the bottom of the mobile container */}

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
