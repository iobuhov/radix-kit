import { ReactElement, createElement } from "react";
import { Avatar, AvatarProps } from "radix-ui-themes/components/avatar";
import { withDefaultClasses } from "widget-utils/class-utils";

interface UIAvatarProps {
  className?: string;
  style?: React.CSSProperties;
  src: string;
  fallback: string;
  radius?: AvatarProps["radius"];
}

export function UIAvatar(props: UIAvatarProps): ReactElement {
  const className = withDefaultClasses(props.className ?? "", defaultClasses);
  return <Avatar {...props} className={className} />;
}

const defaultClasses = [[/rt-r-size/i, "rt-r-size-3"]] satisfies [RegExp, string][];
