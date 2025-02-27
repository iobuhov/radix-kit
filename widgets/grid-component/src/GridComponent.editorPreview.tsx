import { ReactElement, createElement } from "react";
import { GridComponentPreviewProps } from "../typings/GridComponentProps";
import { DropZone } from "radix-ui-themes/preview/dropzone";
import { UIGrid } from "./ui-grid";

export function preview(props: GridComponentPreviewProps): ReactElement {
  const children = <DropZone {...props} prop="children" />;

  return <UIGrid {...props} children={children} />;
}
