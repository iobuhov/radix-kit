/**
 * This file was generated from Box.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type NameEnum =
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

export interface ResponsivePropsType {
  name: NameEnum;
  initial: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ResponsivePropsPreviewType {
  name: NameEnum;
  initial: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface BoxContainerProps {
  name: string;
  class: string;
  style?: CSSProperties;
  tabIndex?: number;
  children?: ReactNode;
  responsiveProps: ResponsivePropsType[];
}

export interface BoxPreviewProps {
  /**
   * @deprecated Deprecated since version 9.18.0. Please use class property instead.
   */
  className: string;
  class: string;
  style: string;
  styleObject?: CSSProperties;
  readOnly: boolean;
  renderMode: "design" | "xray" | "structure";
  translate: (text: string) => string;
  children: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
  responsiveProps: ResponsivePropsPreviewType[];
}
