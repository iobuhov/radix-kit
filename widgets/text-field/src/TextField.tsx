import { ReactElement, createElement } from "react";
import { UITextField } from "./ui-text-field";
import { TextFieldContainerProps } from "../typings/TextFieldProps";

export function TextField({ class: className, ...props }: TextFieldContainerProps): ReactElement {
  return (
    <UITextField
      value={props.value?.value ?? ""}
      onChange={event => props.value?.setValue(event.target.value)}
      className={className}
    />
  );
}
