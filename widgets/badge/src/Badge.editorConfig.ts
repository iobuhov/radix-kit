import { hidePropertyIn } from "@mendix/pluggable-widgets-tools";
import { BadgePreviewProps } from "../typings/BadgeProps";
import { Properties } from "../typings/editor-types";

export function getProperties(values: BadgePreviewProps, schema: Properties): Properties {
    if (values.size !== "object") {
        hidePropertyIn(schema, values, "sizeInitial");
    }
    return schema;
}
