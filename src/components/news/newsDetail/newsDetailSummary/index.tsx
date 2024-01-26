import { FC } from "react";
import styles from "./newsDetailSummary.module.scss";
import Image from "next/image";

const NewsDetailSummary: FC = () => {
  return (
    <div className={styles["content"]}>
      <div className={styles["summary"]}>
        <div className={styles["summary-content"]}>
          <div className={styles["date"]}>
            <p>DatePosted:</p>
            <span>25/10/2023</span>
            <div className={styles["calendar"]}>
              <Image src="/icons/calendar.png" alt="Calendar Icon" fill />
            </div>
            <div className={styles["mobile-social-links"]}>
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
          {`Patch 13.21 is the patch our set championship will be played on, so mark your calendars for the first weekend of November, cause we also have a very special announcement to make on the final day of the competition!
            Here we're focused on making sure each play style is as competitive as possible ahead of our championship.`}
        </div>
        <div className={styles["detail"]}>
          <div className={styles["avatar"]}>
            <Image src="/images/temp/user-1.png" fill alt="Avatar" />
          </div>
          <p>Gosucodes</p>
          <span>GunZ The Duel: Team</span>
          <div className={styles["title"]}>
            <span>/</span>
            <p>patch notes</p>
            <span>/</span>
          </div>
        </div>
      </div>
      <div className={styles["links"]}>
        <p>Teamfight Tactics</p>
        <p>patch 13.21 notes</p>
        <div className={styles["target"]}>
          <div className={styles["target-icon"]}>
            <Image src="/icons/target.svg" alt="target" fill />
          </div>
          <p>Mid-Patch Updates</p>
        </div>
        <span>SMALL CHANGES</span>
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
    </div>
  );
};

export default NewsDetailSummary;
