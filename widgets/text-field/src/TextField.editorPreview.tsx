import { ReactElement, createElement } from "react";
import { TextFieldPreviewProps } from "../typings/TextFieldProps";
import { UITextField } from "./ui-text-field";

export function preview({ value, class: className, styleObject: style }: TextFieldPreviewProps): ReactElement {
  // HEllo
  return <UITextField value={value} onChange={() => {}} className={className} style={style} />;
}
