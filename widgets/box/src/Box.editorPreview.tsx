import { ReactElement, createElement } from "react";
import { BoxPreviewProps } from "../typings/BoxProps";
import { UIBox } from "./component";
import { DropZone } from "radix-ui-themes/preview/dropzone";

export function preview(props: BoxPreviewProps): ReactElement {
  const children = <DropZone {...props} prop="children" />;

  return <UIBox {...props} children={children} />;
}
