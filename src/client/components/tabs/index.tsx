import React from "react";
import { WindowHeaderTab } from "./common";
import WindowTabs from "./WindowTabs";

interface WindowHeaderProps {
  tabs: WindowHeaderTab[];
  currentTabId: string;
}

export default function WindowHeader(props: WindowHeaderProps) {
  console.log(props);
  return (
    <div>
      <WindowTabs tabs={props.tabs} currentTabId={props.currentTabId} />
    </div>
  );
}
