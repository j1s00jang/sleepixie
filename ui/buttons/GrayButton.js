import styles from "@/ui/buttons/GrayButton.module.css";

const GrayButton = ({ label }) => {
    return <button className={styles.buttonContainer}>{label}</button>;
};
export default GrayButton;
