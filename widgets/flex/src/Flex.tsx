import { ReactElement, createElement } from "react";
import { Flex as RadixFlex } from "radix-ui-themes/components/flex";
import { FlexContainerProps } from "../typings/FlexProps";

export function Flex(props: FlexContainerProps): ReactElement {
  return <RadixFlex className={props.class} style={props.style} wrap="nowrap" children={props.children} />;
}
