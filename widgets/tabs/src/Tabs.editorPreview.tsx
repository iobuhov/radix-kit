import { ReactElement, createElement } from "react";
import { TabsPreviewProps } from "../typings/TabsProps";
import { UITabs, UITabsPreview } from "./ui-tabs";

export function preview(props: TabsPreviewProps): ReactElement {
  const previewTabs = props.tabs.map(tab => ({
    caption: tab.caption,
    value: tab.value,
    content: (
      <tab.content.renderer>
        <div className="rt-PreviewTab" />
      </tab.content.renderer>
    ),
    object: tab
  }));

  return (
    <UITabs {...props}>
      <UITabsPreview tabs={previewTabs} />
    </UITabs>
  );
}
