import { ReactElement, createElement } from "react";
import { DropZone } from "radix-ui-themes/preview/dropzone";
import { CardPreviewProps } from "../typings/CardProps";
import { UICard } from "./ui-card";

export function preview({ styleObject, class: className, ...props }: CardPreviewProps): ReactElement {
  const children = <DropZone {...props} spacer={false} prop="children" />;
  return <UICard {...props} style={styleObject} className={className} children={children} />;
}
