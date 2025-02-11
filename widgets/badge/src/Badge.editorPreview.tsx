import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { BadgePreviewProps } from "../typings/BadgeProps";

export function preview({ sampleText }: BadgePreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/Badge.css");
}
