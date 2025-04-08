import { CSSProperties, ReactElement, ReactNode, createElement } from "react";
import { Card } from "radix-ui-themes/components/card";

interface UICardProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function UICard(props: UICardProps): ReactElement {
  return <Card {...props} />;
}
