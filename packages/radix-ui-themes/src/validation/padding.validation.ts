import { z } from "zod";
import { responsiveValue } from "./utils";

const paddingValues = z.enum(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]).or(z.string());

export const paddingSchema = z.object({
  p: responsiveValue(paddingValues).optional(),
  px: responsiveValue(paddingValues).optional(),
  py: responsiveValue(paddingValues).optional(),
  pt: responsiveValue(paddingValues).optional(),
  pr: responsiveValue(paddingValues).optional(),
  pb: responsiveValue(paddingValues).optional(),
  pl: responsiveValue(paddingValues).optional(),
});
