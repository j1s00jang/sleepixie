import React, { useState } from "react";
import styles from "./SupplementModal.module.css";
import Image from "next/image";

// Modal for editing supplement details
const SupplementModal = ({ open, onClose, onSave, title = "Probiotics" }) => {
  const [usageCount, setUsageCount] = useState(1);
  const [frequency, setFrequency] = useState(1);
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const [time, setTime] = useState(getCurrentTime());
  const [selectedDays, setSelectedDays] = useState([]);

  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSave = () => {
    alert(
      "This would add a supplement to the achievement calendar page and update as an upcoming event through a database, ideally."
    );
    onSave({ usageCount, frequency, time, selectedDays, title });
  };

  if (!open) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <span className={styles.title}>{title}</span>
          <button className={styles.saveBtn} onClick={handleSave}>
            Save
          </button>
        </div>
        {/* Usage */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Direction for use/Usage</div>
          <div className={styles.counter}>
            <button onClick={() => setUsageCount((c) => Math.max(1, c - 1))}>
              -
            </button>
            <span>{usageCount}</span>
            <button onClick={() => setUsageCount((c) => c + 1)}>+</button>
          </div>
        </div>
        {/* Frequency */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Frequency(Per day)</div>
          <div className={styles.counter}>
            <button onClick={() => setFrequency((f) => Math.max(1, f - 1))}>
              -
            </button>
            <span>{frequency}</span>
            <button onClick={() => setFrequency((f) => f + 1)}>+</button>
          </div>
        </div>
        {/* Time and Days */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Time</div>
          <div className={styles.timePicker}>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={styles.timeInput}
            />
          </div>
          <div className={styles.daysRow}>
            {days.map((day) => (
              <span
                key={day}
                className={`${styles.dayBtn} ${
                  selectedDays.includes(day) ? styles.selectedDay : ""
                }`}
                onClick={() => toggleDay(day)}
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplementModal;
