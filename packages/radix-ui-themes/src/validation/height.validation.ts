import { z } from "zod";
import { responsiveValue } from "./utils";

export const heightSchema = z.object({
  height: responsiveValue(z.string()).optional(),
  minHeight: responsiveValue(z.string()).optional(),
  maxHeight: responsiveValue(z.string()).optional(),
});
