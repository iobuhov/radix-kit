import { ReactElement, createElement } from "react";
import { UIAvatar } from "./ui-avatar";
import { AvatarContainerProps } from "../typings/AvatarProps";

export function Avatar({ class: className, ...props }: AvatarContainerProps): ReactElement {
  return <UIAvatar {...props} fallback="foo" className={className} />;
}
