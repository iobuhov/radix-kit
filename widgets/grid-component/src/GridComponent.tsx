import { ReactElement, createElement } from "react";
import { UIGrid } from "./ui-grid";
import { GridComponentContainerProps } from "../typings/GridComponentProps";

export function GridComponent(props: GridComponentContainerProps): ReactElement {
  return <UIGrid {...props} />;
}
