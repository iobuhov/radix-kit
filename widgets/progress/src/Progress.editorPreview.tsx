import { ReactElement, createElement } from "react";
import { ProgressPreviewProps } from "../typings/ProgressProps";
import { UIProgress } from "./ui-progress";

export function preview({ class: className, styleObject: style, ...props }: ProgressPreviewProps): ReactElement {
  return <UIProgress {...props} className={className} style={style} />;
}
