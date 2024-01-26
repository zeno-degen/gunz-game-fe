import { FC } from "react";
import styles from "./additionLinks.module.scss";
import Image from "next/image";

const AdditionLinks: FC = () => {
  return (
    <div className={styles["addition-links"]}>
      <div className={styles["view-medium"]}>
        <p>View on medium</p>
        <div className={styles["medium-icon"]}>
          <Image src="/icons/medium.svg" alt="News Detail Bg" fill />
        </div>
      </div>
      <div className={styles["share-bar"]}>
        <div className={styles["gun"]}>
          <Image src="/icons/gun.svg" alt="News Detail Bg" fill />
        </div>
        <div className={styles["bar"]} />
        <p>Share this article</p>
        <div className={styles["bar"]} />
        <div className={styles["target"]}>
          <Image src="/icons/target.svg" alt="News Detail Bg" fill />
        </div>
      </div>
      <div className={styles["social-links"]}>
        <div className={styles["link-content"]}>
          <Image src="/icons/facebook.svg" alt="" fill />
        </div>
        <div className={styles["link-content"]}>
          <Image src="/icons/twitter-2.svg" alt="" fill />
        </div>
        <div className={styles["link-content"]}>
          <Image src="/icons/reddit.svg" alt="" fill />
        </div>
        <div className={styles["link-content"]}>
          <Image src="/icons/link.svg" alt="" fill />{" "}
        </div>
      </div>
    </div>
  );
};

export default AdditionLinks;
