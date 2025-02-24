import { ReactElement, createElement } from "react";
import { Badge as RadixBadge } from "radix-ui/components/Badge";
import { BadgePreviewProps } from "../typings/BadgeProps";
import * as mapProp from "./map-prop";

export function preview(props: BadgePreviewProps): ReactElement {
  return <RadixBadge {...mapProp.fromPreview(props)} />;
}
