import React from "react";
import styles from "./Calendar.module.css";
import Link from "next/link";

function getWeeks(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0: Sunday, 6: Saturday
  const weeks = [];
  let day = 1 - firstDayIndex;

  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++, day++) {
      if (day > 0 && day <= daysInMonth) {
        week.push(day);
      } else {
        week.push("");
      }
    }
    weeks.push(week);
  }
  return weeks;
}

export default function Calendar({ month, year, highlightDay }) {
  // If props are not provided, use the current date
  const today = new Date();
  const currentMonth = month !== undefined ? month : today.getMonth();
  const currentYear = year !== undefined ? year : today.getFullYear();
  const currentDay =
    highlightDay !== undefined ? highlightDay : today.getDate();

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
  const weeks = getWeeks(currentYear, currentMonth);

  // Filter out weeks that are completely empty
  const filteredWeeks = weeks.filter((week) => week.some((day) => day !== ""));

  return (
    <Link href="/weeklyCalendarPage" className={styles.calendarLink}>
      <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>Calendar</div>
        <div className={styles.calendarMonth}>{monthNames[currentMonth]}</div>
        <table className={styles.calendarTable}>
          <thead>
            <tr>
              {["", "", "", "", "", "", ""].map((day, idx) => (
                <th key={idx} className={styles.calendarTableHeader}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredWeeks.map((week, i) => (
              <tr key={i}>
                {week.map((date, j) => (
                  <td key={j} className={date ? styles.day : styles.empty}>
                    {date === currentDay && date ? (
                      <span className={styles.highlight}>{date}</span>
                    ) : (
                      date
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Link>
  );
}
