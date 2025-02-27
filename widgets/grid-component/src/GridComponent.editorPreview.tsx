import { ReactElement, createElement } from "react";
import { GridComponentPreviewProps } from "../typings/GridComponentProps";

export function preview({ text }: GridComponentPreviewProps): ReactElement {
  return <div>Preview {text}</div>;
}
