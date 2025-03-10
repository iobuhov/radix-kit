import { ReactElement, createElement } from "react";
import { LayoutClassicPreviewProps } from "../typings/LayoutClassicProps";
import { UILayoutClassic } from "./ui-layout-classic";

export function preview({ topbar, sidenav, content }: LayoutClassicPreviewProps): ReactElement {
  return (
    <UILayoutClassic
      topbar={
        <topbar.renderer>
          <div style={{ display: "contents" }} />
        </topbar.renderer>
      }
      sidenav={
        <sidenav.renderer>
          <div style={{ display: "contents" }} />
        </sidenav.renderer>
      }
      content={
        <content.renderer>
          <div style={{ display: "contents" }} />
        </content.renderer>
      }
    />
  );
}
