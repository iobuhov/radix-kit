import { ReactElement, createElement } from "react";
import { Avatar } from "radix-ui-themes/components/avatar";

interface UIAvatarProps {
  src: string;
  fallback: string;
}

export function UIAvatar(props: UIAvatarProps): ReactElement {
  return <Avatar {...props} />;
}
