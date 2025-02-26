import * as React from "react";

type Widgets = { widgetCount: number; renderer: React.ComponentType<{ children: React.ReactNode; caption?: string }> };

type Props<T extends string> = Record<T, Widgets> & {
  prop: T;
};

export function DropZone<T extends string = "children">(props: Props<T>): React.ReactElement {
  const children = props[props.prop];
  const content = (
    <children.renderer>
      <div style={{ display: "contents" }} />
    </children.renderer>
  );

  if (children.widgetCount === 0) {
    return <div data-drop-zone-spacer>{content}</div>;
  }

  return content;
}
