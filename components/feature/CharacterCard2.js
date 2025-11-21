import styles from "./CharacterCard.module.css";
import Image from "next/image";

const CharacterCard2 = () => {
  return (
    <div className={styles.characterCard2}>
      <div className={styles.characterVideo2}>
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
      <div className={styles.characterLevelBar2}>
        <p className={styles.levelNumber2}>Lv 1</p>
        <Image
          className={styles.levelBar}
          src="/icons/LevelStatusBar.png"
          alt="LevelBar"
          width={281}
          height={18}
        />
        <p className={styles.levelNumber2}>Lv 2</p>
      </div>
    </div>
  );
};

export default CharacterCard2;
