import { ReactElement, createElement } from "react";
import { Badge as RadixBadge } from "@radix-ui/themes-radix-kit/components/Badge";
import { BadgeContainerProps } from "../typings/BadgeProps";
import * as mapProp from "./map-prop";

export function Badge(props: BadgeContainerProps): ReactElement {
    return (
        <RadixBadge variant="outline" size={mapProp.size(props.size)} color="ruby">
            {props.text}
        </RadixBadge>
    );
}
