import { ReactElement, createElement } from "react";
import { BoxContainerProps } from "../typings/BoxProps";
import { UIBox } from "./component";

export function Box(props: BoxContainerProps): ReactElement {
  return <UIBox {...props} />;
}
