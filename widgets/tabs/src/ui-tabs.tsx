import { createElement } from "react";
import { Root, List, Trigger, Content } from "radix-ui-themes/components/tabs";

declare module "mendix/preview/Selectable" {
  interface SelectableProps<T> {
    object: T;
    caption?: string;
    children: React.ReactNode;
  }
}

interface TabItem {
  caption: string;
  value: number | null;
}

export interface Tab extends TabItem {
  content: React.ReactNode;
}

interface UITabsProps {
  tabs: TabItem[];
  defaultValue?: number | null;
  children?: React.ReactNode;
}

export function UITabs({ tabs, defaultValue, children }: UITabsProps) {
  return (
    <Root defaultValue={defaultValue ? `${defaultValue}` : undefined}>
      <List>
        {tabs.map(tab => (
          <Trigger key={tab.value} value={`${tab.value}`}>
            {tab.caption}
          </Trigger>
        ))}
      </List>
      {children}
    </Root>
  );
}

export function UITabsContent(props: { tabs: Tab[] }) {
  return props.tabs.map(tab => (
    <Content key={tab.value} value={String(tab.value)}>
      {tab.content}
    </Content>
  ));
}
