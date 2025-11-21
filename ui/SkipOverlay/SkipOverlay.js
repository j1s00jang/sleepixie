"use client";

import { useRouter } from "next/navigation";
import GrayButton from "@/ui/buttons/GrayButton";
import styles from "./SkipOverlay.module.css";
import YellowFilledButton from "../buttons/YellowFilledButton";
import YellowButton from "../buttons/YellowButton";

export default function SkipOverlay({ isOpen, onClose }) {
    const router = useRouter();

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Are you sure?</h2>
                <p className={styles.message}>
                    It could be helpful to know about your sleep pattern!
                </p>
                <div className={styles.buttonWrapper}>
                    <div className={styles.buttonContainer}>
                        <span onClick={onClose}>
                            <YellowButton label="Go back and continue" />
                        </span>
                    </div>
                    <div className={styles.buttonContainer}>
                        <span onClick={onClose}>
                            <GrayButton label="Still, Skip" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
