import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/components/feature/TimeRing.module.css";

export default function TimeRing() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time as hh:mm am/pm
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "pm" : "am";
  const timeString = `${hours}:${minutes}${ampm}`;

  // Get timezone string (e.g., PDT (GMT-7))
  const tz = now
    .toLocaleTimeString("en-us", { timeZoneName: "short" })
    .split(" ");
  const timezone = tz[2]
    ? tz[2]
    : Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className={styles.timeRingContainer}>
      <Image
        src="/images/timering_1.png"
        alt="Timer Ring"
        width={325}
        height={325}
        className={styles.timeRingImage}
        priority
        style={{ width: "100%", height: "auto" }}
      />
      <div className={styles.timeRingCenter}>
        <div className={styles.timezone}>{timezone}</div>
        <div className={styles.time}>{timeString}</div>
      </div>
    </div>
  );
}
