import { changePropertyIn } from "@mendix/pluggable-widgets-tools";
import { BoxPreviewProps } from "../typings/BoxProps";
import { Properties } from "../typings/editor-types";

export function getProperties(_values: BoxPreviewProps, schema: Properties): Properties {
  changePropertyIn(
    schema,
    _values,
    prop => {
      const keys = ["name", "initial", "xs", "sm", "md", "lg", "xl"] as const;
      prop.objectHeaders = [...keys];
      prop.objects?.forEach((object, index) => {
        const data = _values.responsiveProps[index];
        object.captions = keys.map(key => data[key]);
      });
    },
    "responsiveProps"
  );
  return schema;
}
