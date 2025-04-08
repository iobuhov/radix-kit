import { ReactElement, createElement } from "react";
import { UIProgress } from "./ui-progress";
import { ProgressContainerProps } from "../typings/ProgressProps";

export function Progress({ class: className, ...props }: ProgressContainerProps): ReactElement {
  const value = Math.max(Math.min(props.attr?.value?.toNumber() ?? 0, 100), 0);
  return <UIProgress {...props} value={value} className={className} />;
}
