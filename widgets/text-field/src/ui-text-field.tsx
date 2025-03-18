import { createElement } from "react";
import * as TextField from "radix-ui-themes/components/text-field";

interface UITextFieldProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function UITextField(props: UITextFieldProps) {
  return <TextField.Root {...props} />;
}
