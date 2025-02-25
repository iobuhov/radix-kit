interface Responsive {
  initial: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ResponsiveProp<T = PropNameEnum> extends Responsive {
  name: T;
}

type PropNameEnum =
  | "m"
  | "mx"
  | "my"
  | "mt"
  | "mr"
  | "mb"
  | "ml"
  | "p"
  | "px"
  | "py"
  | "pt"
  | "pr"
  | "pb"
  | "pl"
  | "width"
  | "minWidth"
  | "maxWidth"
  | "height"
  | "minHeight"
  | "maxHeight"
  | "position"
  | "inset"
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "overflow"
  | "overflowX"
  | "overflowY"
  | "flexBasis"
  | "flexShrink"
  | "flexGrow"
  | "gridArea"
  | "gridColumn"
  | "gridColumnStart"
  | "gridColumnEnd"
  | "gridRow"
  | "gridRowStart"
  | "gridRowEnd";

export function respProps(list: ResponsiveProp[]): Record<PropNameEnum, Responsive> {
  return list.reduce(
    (acc, prop) => {
      const { name, ...config } = prop;
      acc[name] = config;
      return acc;
    },
    {} as Record<PropNameEnum, Responsive>
  );
}
