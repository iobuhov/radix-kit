import { ReactElement, createElement } from "react";
import { BoxPreviewProps } from "../typings/BoxProps";

export function preview({ text }: BoxPreviewProps): ReactElement {
  return <div>Preview {text}</div>;
}
