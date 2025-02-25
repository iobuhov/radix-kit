import { z } from "zod";

const prop = <T extends z.ZodTypeAny>(valueSchema: T) =>
  z.optional(
    z
      .literal("")
      .transform(() => undefined)
      .or(valueSchema),
  );

export const responsiveValue = <T extends z.ZodTypeAny>(valueSchema: T) =>
  z
    .object({
      initial: prop(valueSchema),
      xs: prop(valueSchema),
      sm: prop(valueSchema),
      md: prop(valueSchema),
      lg: prop(valueSchema),
      xl: prop(valueSchema),
    })
    .transform(filterEmpty);

function filterEmpty<T extends object>(obj: T): T {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => (value === undefined ? acc : { ...acc, [key]: value }),
    {} as T,
  );
}
