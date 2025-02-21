import { ReactElement, createElement } from "react";
import { ThemeProviderPreviewProps } from "../typings/ThemeProviderProps";
import { Theme } from "./component";

export function preview(props: ThemeProviderPreviewProps): ReactElement {
  const Placeholder = props.content.renderer;
  return (
    <Theme radius={props.radius} appearance={props.appearance}>
      <Placeholder caption={"Content"}>
        <div />
      </Placeholder>
    </Theme>
  );
}
