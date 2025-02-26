import { ReactElement, createElement } from "react";
import { DropZone } from "radix-ui-themes/preview/dropzone";
import { FlexPreviewProps } from "../typings/FlexProps";
import { UIFlex } from "./ui-flex";

export function preview(props: FlexPreviewProps): ReactElement {
  const children = <DropZone {...props} prop="children" />;

  return <UIFlex {...props} style={props.styleObject} children={children} />;
}
