import { createElement, CSSProperties } from "react";
import { Button } from "radix-ui-themes/components/button";

interface UIButtonProps {
  name: string;
  class: string;
  style?: CSSProperties;
  tabIndex?: number;
  caption: string;
}

export const UIButton: React.FC<UIButtonProps> = ({ name, class: className, style, tabIndex, caption }) => {
  return (
    <Button name={name} className={className} style={style} tabIndex={tabIndex}>
      {caption}
    </Button>
  );
};
