import { ReactElement, createElement } from "react";
import { UICard } from "./ui-card";
import { CardContainerProps } from "../typings/CardProps";

export function Card({ class: className, ...props }: CardContainerProps): ReactElement {
  return <UICard {...props} className={className} />;
}
