import { ReactElement, createElement } from "react";
import { LayoutClassicContainerProps } from "../typings/LayoutClassicProps";
import { UILayoutClassic } from "./ui-layout-classic";

export function LayoutClassic(props: LayoutClassicContainerProps): ReactElement {
  return <UILayoutClassic topbar={props.topbar} sidenav={props.sidenav} content={props.content} />;
}
