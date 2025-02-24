import { ReactElement, createElement } from "react";
import { Flex as RadixFlex } from "radix-ui/components/flex";
import { FlexContainerProps } from "../typings/FlexProps";

export function Flex(props: FlexContainerProps): ReactElement {
  return (
    <RadixFlex className={props.class} style={{ ...props.style, width: 1 }} wrap="wrap" children={props.children} />
  );
}
