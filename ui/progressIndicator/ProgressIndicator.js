"use client";

import styles from "./ProgressIndicator.module.css";

export default function ProgressIndicator({ currentStep = 1 }) {
    return (
        <div className={styles.container}>
            <div className={styles.steps}>
                <div
                    className={`${styles.step} ${
                        currentStep >= 1 ? styles.active : ""
                    }`}
                ></div>
                <div
                    className={`${styles.step} ${
                        currentStep >= 2 ? styles.active : ""
                    }`}
                ></div>
                <div
                    className={`${styles.step} ${
                        currentStep >= 3 ? styles.active : ""
                    }`}
                ></div>
            </div>
        </div>
    );
}
