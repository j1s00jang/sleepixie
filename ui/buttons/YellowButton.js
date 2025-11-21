import styles from "@/ui/buttons/YellowButton.module.css";

const YellowButton = ({ label }) => {
    return <button className={styles.buttonContainer}>{label}</button>;
};
export default YellowButton;
