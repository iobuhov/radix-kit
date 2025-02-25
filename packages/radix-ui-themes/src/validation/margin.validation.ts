import { z } from "zod";
import { responsiveValue } from "./utils";

const marginValues = z.enum([
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

export const marginSchema = z.object({
  m: responsiveValue(marginValues.or(z.string())).optional(),
  mx: responsiveValue(marginValues.or(z.string())).optional(),
  my: responsiveValue(marginValues.or(z.string())).optional(),
  mt: responsiveValue(marginValues.or(z.string())).optional(),
  mr: responsiveValue(marginValues.or(z.string())).optional(),
  mb: responsiveValue(marginValues.or(z.string())).optional(),
  ml: responsiveValue(marginValues.or(z.string())).optional(),
});

export type ValidatedMarginProps = z.infer<typeof marginSchema>;
