"use client";

import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Link from "next/link";
import HeaderComponent from "@/components/ui/HeaderComponent";
import Calendar from "@/components/feature/Calendar";
import ThreeButton from "@/components/ui/ThreeButton";
import { useRouter } from "next/navigation";
import styles from "@/styles/SupplementPage.module.css";
import TimeRing from "@/components/feature/TimeRing";
import "@/styles/globals.css";
import PrimaryButton from "@/components/ui/Button";
import SleepSessionModal from "@/components/feature/SleepSessionModal";
import SleepReviewModal from "@/components/feature/SleepReviewModal";
import { useState } from "react";

export default function AchievementPage() {
  const router = useRouter();
  const [showSleepModal, setShowSleepModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [sleepStart, setSleepStart] = useState(null);
  const [sleepEnd, setSleepEnd] = useState(null);

  // Handler for Sleep now button
  const handleSleepNow = () => {
    setSleepStart(Date.now());
    setShowSleepModal(true);
  };

  // Handler for Cancel in modal
  const handleCancelSleep = () => {
    setShowSleepModal(false);
    alert("User skipped sleep session, no data updated.");
  };

  // Handler for I am up!
  const handleFinishSleep = () => {
    setSleepEnd(Date.now());
    setShowSleepModal(false);
    setShowReviewModal(true);
  };

  // Handler for closing review modal
  const handleCloseReview = () => {
    alert(
      "This would ideally log the performance data in the sleep streak display."
    );
    setShowReviewModal(false);
  };

  return (
    <div className={styles.mobileContainer}>
      {/* Sleep Session Modal */}
      <SleepSessionModal
        open={showSleepModal}
        onCancel={handleCancelSleep}
        onFinish={handleFinishSleep}
        startTime={sleepStart}
      />
      {/* Sleep Review Modal */}
      <SleepReviewModal
        open={showReviewModal}
        onClose={handleCloseReview}
        startTime={sleepStart ? new Date(sleepStart) : new Date()}
        endTime={sleepEnd ? new Date(sleepEnd) : new Date()}
      />
      {/* Scrollable main content area */}
      <main
        className="mainContainer"
        style={{
          overflowY: "auto",
          paddingBottom: 100,
          height: "100%",
        }}
      >
        {/* Greeting */}
        <div className="greeting">
          <span>
            Hello, <b>there</b>!
          </span>
          <br />
          <span className="greetingSub">
            Did you sleep well?{" "}
            <span role="img" aria-label="sleep">
              😴
            </span>
          </span>
        </div>
        {/* TimeRing and Progress Icons */}
        <div className="centerRow">
          <TimeRing />
          <div className="progressIcons">
            <Image
              src="/images/progressicons.png"
              alt="Progress Icons"
              width={80}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        {/* Sleep Now Button */}
        <PrimaryButton
          label="Sleep now"
          variant="secondary"
          onClick={handleSleepNow}
        />
        {/* Sleep Streak Rings */}
        <div className="streakRings" style={{ width: 350 }}>
          <Image
            src="/images/sleepstreakrings.png"
            alt="Sleep Streak Rings"
            width={350}
            height={70}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* Improvement Message */}
        <div className="improvementMsg">
          Your sleep time has <span className="sparkle">✨improved✨</span>
          <br />
          Keep it up! Don't break the green streak!
        </div>
      </main>

      <nav className={styles.navigationBarGlobal}>
        <NavigationBar
          sleepIcon="/icons/StarAndCrescentSelected.svg"
          achievementIcon="/icons/Crown.svg"
          profileIcon="/icons/UserCircle.svg"
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </nav>
    </div>
  );
}
