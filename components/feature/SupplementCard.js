import styles from "./SupplementCard.module.css";
import Image from "next/image";

const getDaySummary = (days) => {
  if (!days || days.length === 0) return "No days selected";
  if (days.length === 7) return "Every day";
  if (days.every((d) => ["Mo", "Tu", "We", "Th", "Fr"].includes(d)))
    return "Weekdays";
  if (days.every((d) => ["Sa", "Su"].includes(d))) return "Weekends";
  return days.join(", ");
};

const SupplementCard = ({
  name,
  image,
  frequency,
  onAdd,
  selected,
  usageCount,
  time,
  days,
  onRemove,
}) => {
  // If selected, show selected styling and details
  if (selected) {
    return (
      <div className={styles.selectedCard}>
        <div className={styles.cardImage}>
          <Image
            src={image}
            alt={name}
            width={70}
            height={70}
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{name}</h3>
          <p className={styles.cardFrequency}>
            {selected.frequency} time(s) per day
            {selected.days && <>, {getDaySummary(selected.days)}</>}
            {selected.usageCount && <>, {selected.usageCount} usage(s)</>}
            {selected.time && <>, at {selected.time}</>}
          </p>
        </div>
        <button className={styles.removeButton} onClick={onRemove}>
          Remove
        </button>
      </div>
    );
  }
  // Default card
  return (
    <div className={styles.supplementCard}>
      <div className={styles.cardImage}>
        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardFrequency}>{frequency} times per day</p>
      </div>
      <button
        className={styles.addButton}
        onClick={onAdd}
        aria-label="Add supplement"
      >
        <Image src="/icons/CircleAdd.svg" alt="Add" width={29} height={28} />
      </button>
    </div>
  );
};

export default SupplementCard;
