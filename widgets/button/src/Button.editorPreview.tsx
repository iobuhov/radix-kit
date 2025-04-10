import { ReactElement, createElement } from "react";
import { ButtonPreviewProps } from "../typings/ButtonProps";
import { UIButton } from "./ui-button";

export function preview({ class: className, styleObject: style, readOnly, caption }: ButtonPreviewProps): ReactElement {
  return (
    <UIButton
      name="button-preview"
      class={className}
      style={style}
      caption={caption}
      tabIndex={readOnly ? -1 : undefined}
    />
  );
}
