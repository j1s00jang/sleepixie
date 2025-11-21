import styles from "./CharacterCard.module.css";
import Image from "next/image";

const CharacterCard = ({ LevelGoal, level1, level2, level3 }) => {
  return (
    <div className={styles.characterCard}>
      <div className={styles.characterVideo}>
        <video
          src="/Level1Video.mp4"
          autoPlay
          muted
          loop
          width={350}
          height={198}
          style={{ borderRadius: "30px" }}
        />
      </div>
      <div className={styles.characterLevelBar}>
        <p className={styles.levelNumber}>Lv 1</p>
        <Image
          className={styles.levelBar}
          src="/icons/LevelStatusBar.png"
          alt="LevelBar"
          width={281}
          height={18}
        />
        <p className={styles.levelNumber}>Lv 2</p>
      </div>
      <div className={styles.characterLevel}>
        <Image src={level1} alt="Level1" width={103} height={103} />
        <Image src={level2} alt="Level2" width={103} height={103} />
        <Image src={level3} alt="Level3" width={103} height={103} />
      </div>
      <div className={styles.levelGoal}>
        <p className={styles.levelGoalTitle}>Current Goal</p>
        <p className={styles.levelGoalText}>{LevelGoal}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
