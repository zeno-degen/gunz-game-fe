import { FC } from "react";
import styles from "./newsDetailCard.module.scss";
import Image from "next/image";
import { NEWS } from "@/config";
import { useSearchParams } from "next/navigation";

const NewsDetailCard: FC = () => {
  return (
    <div className={styles["content"]}>
      <div className={styles["banner"]}>
        <div className={styles["gun"]}>
          <Image src={"/icons/gun-2.svg"} alt={"Gun"} fill />
        </div>
        <p>Mid-Patch Updates</p>
        <div className={styles["bar"]} />
        <div className={styles["bullet"]}>
          <Image src={"/icons/bullet-2.svg"} alt={"Bullet"} fill />
        </div>
      </div>
      <div className={styles["card"]}>
        <div className={styles["lefttop-bar"]} />
        <div className={styles["righttop-bar"]} />
        <div className={styles["leftbottom-bar"]} />
        <div className={styles["rightbottom-bar"]} />
        <h1>OCTOBER 25TH</h1>
        <div className={styles["content"]}>
          <p>bug fixed</p>
          <span>{`When we fixed a bug with Aatrox in 13.21, it ended up causing a new and worse bug with Demacian Elites.`}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailCard;
