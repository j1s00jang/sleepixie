import React, { useEffect, useState } from "react";
import styles from "./SleepSessionModal.module.css";

export default function SleepSessionModal({
  open,
  onCancel,
  onFinish,
  startTime,
}) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!open) return;
    const interval = setInterval(
      () => setElapsed(Date.now() - startTime),
      1000
    );
    return () => clearInterval(interval);
  }, [open, startTime]);

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent}>
        <div className={styles.sleepTitle}>
          Sleep tight.{" "}
          <span role="img" aria-label="sleep">
            😴
          </span>
        </div>
        <div className={styles.sleepMsg}>
          Now, Just lay down in the bed.
          <br />
          Sleep tracking has started.
        </div>
        <div className={styles.ambientLabel}>Ambient noise list</div>
        <button className={styles.ambientButton}>
          Birds chirping sound
          <span className={styles.arrow}>&#8250;</span>
        </button>
        <div className={styles.screenMsg}>
          This screen will automatically turn to black in 5 minutes.
        </div>
        <button className={styles.finishButton} onClick={onFinish}>
          I am up!
        </button>
        <button className={styles.cancelButton} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
