import type { Breakpoint } from "../props/prop-def.js";

type RespRecord<T> = Record<Breakpoint, T>;

export interface ResponsiveProp extends RespRecord<string> {
  name: string;
}

export function reduceRespProps(list: ResponsiveProp[]): Record<string, RespRecord<string>> {
  return list.reduce(
    (acc, prop) => {
      const { name, ...config } = prop;
      acc[name] = config;
      return acc;
    },
    {} as Record<string, RespRecord<string>>,
  );
}
