import { BadgeProps } from "@radix-ui/themes-radix-kit/components/Badge";
import { SizeEnum } from "../typings/BadgeProps";

const sizeMap: Record<SizeEnum, "1" | "2" | "3" | undefined> = {
    s1: "1",
    s2: "2",
    s3: "3",
    object: undefined
};

export const size = (size: SizeEnum): BadgeProps["size"] => {
    return size === "object" ? undefined : sizeMap[size];
};
