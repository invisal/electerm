import React from "react";
import { Command } from "../../Command";
import { WindowHeaderTab } from "./common";
import styles from "./styles.module.css";

export default function WindowTabItem({
  tab,
  currentTabId,
}: {
  tab: WindowHeaderTab;
  currentTabId: string;
}) {
  const isActive = tab.id === currentTabId;
  return (
    <div
      onClick={() => {
        Command.Tab.changeTabId(tab.id);
      }}
      className={
        isActive
          ? [styles.tab_item_wrapper, styles.tab_item_wrapper_active].join(" ")
          : styles.tab_item_wrapper
      }
    >
      {tab.title}
    </div>
  );
}
