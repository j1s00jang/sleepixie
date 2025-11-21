import styles from "./Notification.module.css";
import SmallPrimButton from "../ui/SmallPrimButton";
import SmallSecondButton from "../ui/SmallSecondButton";

const Notification = ({ onSkip, onAccept }) => {
  // Handler for Skip
  const handleSkip = () => {
    alert(
      '"Skipping" skips the supplement tracking. This would ideally reflect on the day agenda display.'
    );
    if (onSkip) onSkip();
  };
  // Handler for Accept
  const handleAccept = () => {
    alert(
      '"Accepting" checks off the user-defined supplement dose time. This would ideally reflect on the day agenda display.'
    );
    if (onAccept) onAccept();
  };
  return (
    <div className={styles.notificationContainer}>
      <p className={styles.notificationTitle}>Supplement Time!</p>
      <p className={styles.notificationTime}>8:30 AM</p>
      <div className={styles.buttonContainer}>
        <SmallSecondButton label="Skip" onClick={handleSkip} />
        <SmallPrimButton label="Accept" onClick={handleAccept} />
      </div>
    </div>
  );
};

export default Notification;
