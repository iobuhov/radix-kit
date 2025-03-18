import { ReactElement, createElement } from "react";
import { TextFieldPreviewProps } from "../typings/TextFieldProps";

export function preview({ text }: TextFieldPreviewProps): ReactElement {
  return <div>Preview {text}</div>;
}
