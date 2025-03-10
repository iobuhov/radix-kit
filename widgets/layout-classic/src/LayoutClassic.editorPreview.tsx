import { ReactElement, createElement } from "react";
import { LayoutClassicPreviewProps } from "../typings/LayoutClassicProps";

export function preview({ text }: LayoutClassicPreviewProps): ReactElement {
  return <div>Preview {text}</div>;
}
