import { ReactElement, CSSProperties, createElement } from "react";
import { Progress } from "radix-ui-themes/components/progress";

interface UIProgressProps {
  className?: string;
  style?: CSSProperties;
  value?: number;
}

export function UIProgress(props: UIProgressProps): ReactElement {
  return <Progress {...props} />;
}
