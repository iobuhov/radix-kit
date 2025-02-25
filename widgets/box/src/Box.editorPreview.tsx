import { ReactElement, createElement } from "react";
import { BoxPreviewProps } from "../typings/BoxProps";
import { UIBox } from "./component";

export function preview(props: BoxPreviewProps): ReactElement {
  const children = (
    <props.children.renderer>
      <div style={{ display: "contents" }} />
    </props.children.renderer>
  );

  return <UIBox {...props} children={children} />;
}
