import { createElement, useState } from "react";
import { ThemeProps, Theme as RadixTheme } from "@radix-ui/themes-radix-kit/components/theme";

export function Theme(props: ThemeProps) {
    const [isDark] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
    return <RadixTheme {...props} appearance={isDark ? "dark" : "light"} />;
}
