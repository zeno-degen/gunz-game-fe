import { FC } from "react";
import styles from "./newsDetailBanner.module.scss";
import Image from "next/image";
import DownloadButton from "@/components/landing/heroBanner/downloadButton";

const NewsDetailBanner: FC = () => {
  return (
    <div className={styles["news-banner"]}>
      <div className={styles["banner-bg"]}>
        <Image src="/images/bg-newsdetail.png" alt="News Banner Bg" fill />
      </div>

      <div className={styles["news-content"]}>
        <DownloadButton title={"GunZ Patch Notes #002"} showIcon={false} />
      </div>
      <div className={styles["gradient-bg"]} />
    </div>
  );
};

export default NewsDetailBanner;
