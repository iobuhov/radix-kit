import { ReactElement, createElement } from "react";
import { UIAvatar } from "./ui-avatar";
import { AvatarContainerProps } from "../typings/AvatarProps";

export function Avatar(props: AvatarContainerProps): ReactElement {
  return <UIAvatar src={props.src} fallback="foo" />;
}
