import { createElement } from "react";
import { ThemeProps, Theme as RadixTheme } from "@radix-ui/themes-radix-kit/components/theme";

export function Theme(props: ThemeProps) {
    return <RadixTheme {...props} />;
}
