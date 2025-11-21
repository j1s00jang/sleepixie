import styles from "@/ui/buttons/BlueButton.module.css";

const BlueButton = ({ label, isSelected, onClick }) => {
    return (
        <div className={styles.buttonContainer}>
            <button
                className={`${styles.buttonContainer} ${
                    isSelected ? styles.selected : ""
                }`}
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    );
};
export default BlueButton;
