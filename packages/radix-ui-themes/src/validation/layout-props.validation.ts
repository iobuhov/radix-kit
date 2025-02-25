import { z } from "zod";
import { heightSchema } from "./height.validation";
import { marginSchema } from "./margin.validation";
import { paddingSchema } from "./padding.validation";
import { responsiveValue } from "./utils";
import { widthSchema } from "./width.validation";

// Position values
const positionValues = z.enum(["static", "relative", "absolute", "fixed", "sticky"]);

// Position edge values
const positionEdgeValues = z.enum([
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "-1",
  "-2",
  "-3",
  "-4",
  "-5",
  "-6",
  "-7",
  "-8",
  "-9",
]);

// Overflow values

const overflowValues = z.enum(["visible", "hidden", "clip", "scroll", "auto"], {
  message: `Expect one of: "visible", "hidden", "clip", "scroll" or "auto"`,
});

// Flex values
const flexValues = z.enum(["0", "1"]);

// Layout props schema
export const layoutPropsSchema = z.object({
  ...widthSchema.shape,
  ...heightSchema.shape,
  ...paddingSchema.shape,
  ...marginSchema.shape,

  // Position props
  position: responsiveValue(positionValues).optional(),
  inset: responsiveValue(positionEdgeValues.or(z.string())).optional(),
  top: responsiveValue(positionEdgeValues.or(z.string())).optional(),
  right: responsiveValue(positionEdgeValues.or(z.string())).optional(),
  bottom: responsiveValue(positionEdgeValues.or(z.string())).optional(),
  left: responsiveValue(positionEdgeValues.or(z.string())).optional(),

  // Overflow props
  overflow: responsiveValue(overflowValues).optional(),
  overflowX: responsiveValue(overflowValues).optional(),
  overflowY: responsiveValue(overflowValues).optional(),

  // Flex props
  flexBasis: responsiveValue(z.string()).optional(),
  flexShrink: responsiveValue(flexValues.or(z.string())).optional(),
  flexGrow: responsiveValue(flexValues.or(z.string())).optional(),

  // Grid props
  gridArea: responsiveValue(z.string()).optional(),
  gridColumn: responsiveValue(z.string()).optional(),
  gridColumnStart: responsiveValue(z.string()).optional(),
  gridColumnEnd: responsiveValue(z.string()).optional(),
  gridRow: responsiveValue(z.string()).optional(),
  gridRowStart: responsiveValue(z.string()).optional(),
  gridRowEnd: responsiveValue(z.string()).optional(),
});

export type ValidatedLayoutProps = z.infer<typeof layoutPropsSchema>;
