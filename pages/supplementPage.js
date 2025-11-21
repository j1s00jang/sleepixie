"use client";

import Search from "@/components/ui/Search";
import SupplementList from "@/components/feature/SupplementList";
import HeaderComponent from "@/components/ui/HeaderComponent";
import NavigationBar from "@/components/layout/NavigationBar";
import styles from "@/styles/SupplementPage.module.css";
import { useState } from "react";

export default function SupplementPage() {
  // State for search bar input
  const [searchQuery, setSearchQuery] = useState("");

  // Update search query as user types
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    // Main mobile container for fixed-width layout
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
        {/* Header with back button and page title */}
        <header className="settingHeader">
          <HeaderComponent pageName="Supplements" pageLink="/goalSetting" />
        </header>
        {/* Container for search bar and supplement list */}
        <section className="buttonContainer">
          {/* Search bar for filtering supplements */}
          <div className={styles.searchContainer}>
            <Search label="Search Supplement" onSearch={handleSearch} />
          </div>
          {/* List of supplement cards, filtered by search */}
          <SupplementList searchQuery={searchQuery} />
        </section>
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
