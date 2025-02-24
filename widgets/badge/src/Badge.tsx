import { ReactElement, createElement } from "react";
import { Badge as RadixBadge } from "radix-ui/components/Badge";
import { BadgeContainerProps } from "../typings/BadgeProps";
import * as mapProp from "./map-prop";

export function Badge(props: BadgeContainerProps): ReactElement {
  return <RadixBadge {...mapProp.fromContainer(props)} />;
}
