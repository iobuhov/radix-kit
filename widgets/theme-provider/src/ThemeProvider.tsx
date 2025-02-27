import { ReactElement, createElement } from "react";
import { ThemeProviderContainerProps } from "../typings/ThemeProviderProps";
import { Theme } from "./component";

export function ThemeProvider(props: ThemeProviderContainerProps): ReactElement {
  return (
    <Theme radius={props.radius} appearance={props.appearance} grayColor="mauve" accentColor="ruby">
      {props.content}
    </Theme>
  );
}
