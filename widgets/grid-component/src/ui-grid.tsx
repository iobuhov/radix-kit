import { createElement } from "react";
import { Grid } from "radix-ui-themes/components/grid";

interface UIGridProps {
  class?: string;
  styleObject?: React.CSSProperties;
  children?: React.ReactNode;
}

export function UIGrid(props: UIGridProps): React.ReactElement {
  return <Grid {...props} className={props.class} style={props.styleObject} />;
}
