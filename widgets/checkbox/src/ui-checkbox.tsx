import { createElement, CSSProperties } from "react";
import { Checkbox } from "radix-ui-themes/components/checkbox";

interface UICheckboxProps {
  name: string;
  class: string;
  style?: CSSProperties;
  tabIndex?: number;
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
}

export const UICheckbox: React.FC<UICheckboxProps> = ({
  name,
  class: className,
  style,
  tabIndex,
  checked,
  disabled,
  onCheckedChange
}) => {
  return (
    <Checkbox
      name={name}
      className={className}
      style={style}
      tabIndex={tabIndex}
      checked={checked}
      disabled={disabled}
      onCheckedChange={onCheckedChange}
    />
  );
};
