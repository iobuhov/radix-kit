import { ReactElement, createElement } from "react";
import { AvatarPreviewProps } from "../typings/AvatarProps";
import { UIAvatar } from "./ui-avatar";

export function preview({ src }: AvatarPreviewProps): ReactElement {
  return <UIAvatar src={src} fallback="foo" />;
}
