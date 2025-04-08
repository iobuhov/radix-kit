import { ReactElement, createElement } from "react";
import { AvatarPreviewProps } from "../typings/AvatarProps";
import { UIAvatar } from "./ui-avatar";

export function preview(props: AvatarPreviewProps): ReactElement {
  return (
    <UIAvatar src={props.src} style={props.styleObject} className={props.class} fallback="NA" radius={props.radius} />
  );
}
