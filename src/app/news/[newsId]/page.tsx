import { Metadata } from "next";
import styles from "./newsDetail.module.scss";
import MainPageLayout from "@/components/layout";
import NewsDetailBanner from "@/components/news/newsDetail/newsDetailBanner";
import AdditionLinks from "@/components/news/additionLinks";
import NewsDetailSummary from "@/components/news/newsDetail/newsDetailSummary";
import NewsDetailCard from "@/components/news/newsDetail/newsDetailCard";

export const metadata: Metadata = {
  title: "News Detail | GunZ Website",
  description: "",
};

export default function News() {
  return (
    <MainPageLayout>
      <NewsDetailBanner />
      <div className={styles["container"]}>
        <NewsDetailSummary />
        <div className={styles["detailcard-content"]}>
          <NewsDetailCard />
        </div>
        <AdditionLinks />
      </div>
    </MainPageLayout>
  );
}
