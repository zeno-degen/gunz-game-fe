"use client";
import { FC, useState } from "react";
import styles from "./listGroup.module.scss";
import { NavLink } from "@/utils/types";
import { ArrowDown } from "@/components/svgItems";
import Link from "next/link";

interface GroupProps {
  list: NavLink;
}

const ListGroup: FC<GroupProps> = ({ list }) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className={styles["list-group"]} onClick={() => setOpened(!opened)}>
      <div
        className={styles["title-bar"]}
        style={{
          background: opened ? "rgba(255, 255, 255, 0.25)" : "transparent",
        }}
      >
        <p className={styles["title"]}>{list.title}</p>
        <div className={styles["btn-arrow"]}>
          <ArrowDown color="#FFBE17" />
        </div>
      </div>
      <div
        className={styles["list-box"]}
        style={{
          height: opened ? "auto" : 0,
        }}
      >
        {list.submenu?.map((subMenuItem, index) => (
          <div key={`${index}-${subMenuItem.title}`} className={styles["list"]}>
            <Link href={subMenuItem.url}>{subMenuItem.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListGroup;
