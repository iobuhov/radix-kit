import * as React from "react";

type Widgets = { widgetCount: number; renderer: React.ComponentType<{ children: React.ReactNode; caption?: string }> };

type Props<T extends string> = Record<T, Widgets> & {
  spacer?: boolean;
  prop: T;
};

export function DropZone<T extends string = "children">(props: Props<T>): React.ReactElement {
  const children = props[props.prop];
  const spacer = props.spacer ?? true;
  const content = (
    <children.renderer>
      <div style={{ display: "contents" }} />
    </children.renderer>
  );

  if (children.widgetCount === 0 && spacer) {
    return <div data-drop-zone-spacer>{content}</div>;
  }

  return content;
}
