import { Metadata } from "next";
import MainPageLayout from "@/components/layout";
import HeroBanner from "@/components/landing/heroBanner";
import StreamingNow from "@/components/landing/streamingNow";
import ZCoins from "@/components/landing/zCoins";
import Rank from "@/components/landing/rank";
import GunzVip from "@/components/landing/gunzVip";
import Community from "@/components/landing/community";

export const metadata: Metadata = {
  title: "Home | GunZ Website",
  description: "",
};

export default function Home() {
  return (
    <MainPageLayout>
      <HeroBanner />
      <StreamingNow />
      <ZCoins />
      <GunzVip />
      <Rank />
      <Community />
    </MainPageLayout>
  );
}
