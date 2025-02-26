import { z } from "zod";
import { responsiveValue } from "./utils";

// Display values
const displayValues = z.enum(["none", "inline-flex", "flex"]);

// Direction values
const directionValues = z.enum(["row", "column", "row-reverse", "column-reverse"]);

// Align values
const alignValues = z.enum(["start", "center", "end", "baseline", "stretch"]);

// Justify values
const justifyValues = z.enum(["start", "center", "end", "between", "around"]);

// Wrap values
const wrapValues = z.enum(["nowrap", "wrap", "wrap-reverse"]);

// Gap values
const gapValues = z.enum(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

export const flexPropsSchema = z.object({
  display: responsiveValue(displayValues).optional(),
  direction: responsiveValue(directionValues).optional(),
  align: responsiveValue(alignValues).optional(),
  justify: responsiveValue(justifyValues).optional(),
  wrap: responsiveValue(wrapValues).optional(),
  gap: responsiveValue(gapValues.or(z.string())).optional(),
  gapX: responsiveValue(gapValues.or(z.string())).optional(),
  gapY: responsiveValue(gapValues.or(z.string())).optional(),
});

export type ValidatedFlexProps = z.infer<typeof flexPropsSchema>;
