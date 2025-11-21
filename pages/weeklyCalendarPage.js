"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import NavigationBar from "@/components/layout/NavigationBar";
import HeaderComponent from "@/components/ui/HeaderComponent";
import WeeklyCalendar from "@/components/feature/WeeklyCalendar";
import styles from "@/styles/SupplementPage.module.css";
import Image from "next/image";
import Calendar from "@/components/feature/WeeklyCalendar";
import { useState, useEffect } from "react";
import Notification from "@/components/feature/Notification";

export default function WeeklyCalendarPage() {
  const router = useRouter();
  // State for showing notification
  const [showNotification, setShowNotification] = useState(false);
  // State for which time progress image to show
  const [progressImage, setProgressImage] = useState(
    "/images/TimeProgress2.png"
  );

  // Show notification after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handler to close notification
  const handleCloseNotification = () => setShowNotification(false);

  // Handler for skip
  const handleSkip = () => {
    setProgressImage("/images/TimeProgress4.png");
    setShowNotification(false);
  };
  // Handler for accept
  const handleAccept = () => {
    setProgressImage("/images/TimeProgress3.png");
    setShowNotification(false);
  };

  return (
    <div className={styles.mobileContainer}>
      {/* Overlay and Notification */}
      {showNotification && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.5)",
              zIndex: 1000,
            }}
            onClick={handleCloseNotification}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1001,
            }}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Notification onSkip={handleSkip} onAccept={handleAccept} />
            </div>
          </div>
        </>
      )}
      {/* Scrollable main content area */}
      <main
        className="mainContainer"
        style={{
          overflowY: "auto",
          paddingBottom: 100,
          height: "100%",
        }}
      >
        <HeaderComponent pageName="Weekly Calendar" pageLink="/achievements" />
        <WeeklyCalendar />
        <div className="calendar">
          <Calendar month={2} year={2025} highlightDay={3} />
        </div>
        <Image
          className="timeProgress"
          src={progressImage}
          alt="Time Progress"
          width={402}
          height={717}
        />
      </main>
      <nav className={styles.navigationBarGlobal}>
        <NavigationBar
          sleepIcon="./icons/StarAndCrescent.svg"
          achievementIcon="./icons/CrownSelected.svg"
          profileIcon="./icons/UserCircle.svg"
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </nav>
    </div>
  );
}
