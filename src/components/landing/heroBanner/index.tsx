import { FC } from "react";
import styles from "./heroBanner.module.scss";
import Image from "next/image";
import DownloadButton from "./downloadButton";
import { DOWNLOADBUTTONTITLES } from "@/config";

const HeroBanner: FC = () => {
  return (
    <section className={styles["hero-banner"]}>
      <video className={styles["video"]} autoPlay={true} playsInline loop muted>
        <source src="/videos/landing-page-hero.mp4" type="video/mp4" />
      </video>
      <div className={styles["hero-content"]}>
        <div className={styles["logo"]}>
          <Image src="/images/3D.png" alt="Effected Logo" fill />
        </div>
        <h2 className={styles["intro-text"]}>
          The most competitive 3rd-person shooter that will test you skills{" "}
          <br />
          and reflexes to the limit.
        </h2>
        <DownloadButton title={DOWNLOADBUTTONTITLES[0]} showIcon={true} />
      </div>
    </section>
  );
};

export default HeroBanner;
