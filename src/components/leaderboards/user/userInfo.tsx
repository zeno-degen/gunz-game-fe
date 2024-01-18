"use client";

import { FC } from "react";
import RankHeader from "../rankHeader";
import { useParams } from "next/navigation";
import useUserData from "@/hooks/useUserData";

const UserInfo: FC = () => {
  const params = useParams();
  console.log("searchParams:", params.userId);
  const userData = useUserData(params.userId as string);
  console.log(userData);
  return (
    <div className="">
      <RankHeader />
    </div>
  );
};

export default UserInfo;
