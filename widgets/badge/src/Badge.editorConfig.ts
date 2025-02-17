import { BadgePreviewProps } from "../typings/BadgeProps";
import { Properties } from "../typings/editor-types";

export function getProperties(_values: BadgePreviewProps, defaultProperties: Properties): Properties {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
    /* Example
    if (values.myProperty === "custom") {
        delete defaultProperties.properties.myOtherProperty;
    }
    */
    return defaultProperties;
}
