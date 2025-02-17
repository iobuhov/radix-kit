import { ReactElement, createElement } from "react";
import { Badge as RadixBadge } from "@radix-ui/themes-radix-kit/components/Badge";
import { BadgePreviewProps } from "../typings/BadgeProps";
import * as mapProp from "./map-prop";

export function preview(props: BadgePreviewProps): ReactElement {
    let { text } = props;
    text ||= "Badge";

    return (
        <RadixBadge variant="outline" size={mapProp.size(props.size)} color="ruby">
            {text}&nbsp;
            {typeof props.sizeInitial}&nbsp;{JSON.stringify(props.size)}
        </RadixBadge>
    );
}
