import { ReactElement, createElement } from "react";
import { UIButton } from "./ui-button";
import { ButtonContainerProps } from "../typings/ButtonProps";

export function Button(props: ButtonContainerProps): ReactElement {
  return <UIButton {...props} style={props.style} />;
}
