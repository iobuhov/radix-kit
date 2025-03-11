import { ReactElement, createElement } from "react";
import { UITabs, UITabsContent, Tab } from "./ui-tabs";
import { TabsContainerProps } from "../typings/TabsProps";

export function Tabs(props: TabsContainerProps): ReactElement {
  const tabs = props.tabs.map(
    (tab): Tab => ({
      ...tab,
      caption: tab.caption.value ?? "n/a"
    })
  );

  return (
    <UITabs tabs={tabs} defaultValue={props.defaultValue}>
      <UITabsContent tabs={tabs} />
    </UITabs>
  );
}
