import { ReactElement, createElement } from "react";
import { UIFlex } from "./ui-flex";
import { FlexContainerProps } from "../typings/FlexProps";

export function Flex(props: FlexContainerProps): ReactElement {
  return <UIFlex {...props} style={props.style} children={props.children} />;
}
