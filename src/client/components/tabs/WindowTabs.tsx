import { WindowHeaderTab } from "./common";
import WindowTabItem from "./WindowTabItem";
import styles from "./styles.module.css";
import React from "react";
import { Command } from "../../Command";

export default function WindowTabs({
  tabs,
  currentTabId,
}: {
  tabs: WindowHeaderTab[];
  currentTabId: string;
}) {
  const onTabFillerDoubleClick = () => {
    if (Command.Window.getMaximizeStatus()) {
      Command.Window.unmaximize();
    } else {
      Command.Window.maximize();
    }
  };

  return (
    <div className={styles.tab_wrapper}>
      {tabs.map((tab) => (
        <WindowTabItem key={tab.id} tab={tab} currentTabId={currentTabId} />
      ))}
      <div
        className={styles.tab_filler}
        onDoubleClick={onTabFillerDoubleClick}
      />
    </div>
  );
}
