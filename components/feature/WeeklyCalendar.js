import React from "react";
import styles from "./WeeklyCalendar.module.css";

export default function WeeklyCalendar() {
  // Get today's date
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Get the start of the week (Monday)
  const dayOfWeek = today.getDay(); // 0 (Sun) - 6 (Sat)
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(currentYear, currentMonth, currentDay + mondayOffset);

  // Generate days for this week (Monday to Sunday)
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });

  // Get the month name for the header (use the month of the Monday)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const headerMonth = monthNames[monday.getMonth()];

  return (
    <div className={styles.calendarScrollWrapper}>
      <div className={styles.calendarContainer}>
        <div className={styles.header}>{headerMonth}</div>
        <table className={styles.calendarTable}>
          <tbody>
            <tr>
              {days.map((dateObj, idx) => {
                const isToday =
                  dateObj.getDate() === currentDay &&
                  dateObj.getMonth() === currentMonth &&
                  dateObj.getFullYear() === currentYear;
                return (
                  <td key={idx} className={styles.day}>
                    {isToday ? (
                      <span className={styles.highlight}>
                        {dateObj.getDate()}
                      </span>
                    ) : (
                      dateObj.getDate()
                    )}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
