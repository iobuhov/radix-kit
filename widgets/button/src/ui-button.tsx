import { createElement } from "react";
import { ButtonContainerProps } from "../typings/ButtonProps";

export const UIButton: React.FC<ButtonContainerProps> = ({ name, class: className, style, tabIndex, caption }) => {
  return (
    <button name={name} className={className} style={style} tabIndex={tabIndex}>
      {caption}
    </button>
  );
};
