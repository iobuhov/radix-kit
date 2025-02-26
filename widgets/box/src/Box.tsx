import { ReactElement, createElement } from "react";
import { BoxContainerProps } from "../typings/BoxProps";
import { UIBox } from "./ui-box";

export function Box(props: BoxContainerProps): ReactElement {
  return <UIBox {...props} />;
}
