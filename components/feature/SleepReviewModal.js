import React from "react";
import styles from "./SleepReviewModal.module.css";
import Image from "next/image";
import HeaderComponent from "@/components/ui/HeaderComponent";

function formatTime(date) {
  const h = date.getHours();
  const m = date.getMinutes().toString().padStart(2, "0");
  const ampm = h >= 12 ? "pm" : "am";
  const hour12 = h % 12 || 12;
  return `${hour12}:${m}${ampm}`;
}

export default function SleepReviewModal({
  open,
  onClose,
  startTime,
  endTime,
}) {
  if (!open) return null;
  const durationMs = endTime - startTime;
  const hours = Math.floor(durationMs / 3600000);
  const minutes = Math.floor((durationMs % 3600000) / 60000);
  const durationStr =
    hours > 0 && minutes > 0
      ? `${hours} hr ${minutes} min`
      : hours > 0
      ? `${hours} hr`
      : `${minutes} min`;
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent}>
        <HeaderComponent
          pageName={`${startTime.toLocaleDateString(undefined, {
            month: "long",
            day: "numeric",
          })} Sleep time review`}
          onClick={onClose}
        />
        <div className={styles.timeRingWrapper}>
          <Image
            src="/images/timering_1.png"
            alt="Sleep Time Ring"
            width={360}
            height={360}
            style={{ width: "100%", height: "auto" }}
          />
          <div className={styles.reviewCenterText}>
            <div>Your sleep time was</div>
            <div className={styles.duration}>
              <span role="img" aria-label="confetti">
                🎉
              </span>{" "}
              {durationStr}{" "}
              <span role="img" aria-label="confetti">
                🎉
              </span>
            </div>
            <div className={styles.reviewTimes}>
              {formatTime(startTime)} – {formatTime(endTime)}
            </div>
          </div>
        </div>
        <div className={styles.streakRings}>
          <Image
            src="/images/sleepstreakrings.png"
            alt="Sleep Streak Rings"
            width={350}
            height={70}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
