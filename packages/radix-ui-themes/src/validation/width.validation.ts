import { z } from "zod";
import { responsiveValue } from "./utils";

export const widthSchema = z.object({
  width: responsiveValue(z.string()).optional(),
  minWidth: responsiveValue(z.string()).optional(),
  maxWidth: responsiveValue(z.string()).optional(),
});
