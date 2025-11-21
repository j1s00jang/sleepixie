import styles from "@/ui/buttons/YellowFilledButton.module.css";

const YellowFilledButton = ({ label }) => {
    return <button className={styles.filledButtonContainer}>{label}</button>;
};
export default YellowFilledButton;
