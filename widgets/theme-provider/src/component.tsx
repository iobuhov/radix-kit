import { createElement, useEffect, useState } from "react";
import { ThemeProps, Theme as RadixTheme } from "radix-ui/components/theme";

type Appearance = "dark" | "light" | "inherit";
interface Props extends Omit<ThemeProps, "appearance"> {
  appearance: Appearance | "auto";
}

export function Theme(props: Props) {
  const [appearance] = useState<Appearance>(() => {
    if (props.appearance === "auto") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return props.appearance;
  });
  useEffect(() => {
    const root = document.querySelector("html")!;
    if (appearance === "inherit" || root.classList.contains("dark-theme") || root.classList.contains("light-theme")) {
      return;
    }
    root.classList.toggle("dark-theme", appearance === "dark");
    root.classList.toggle("light-theme", appearance === "light");
  }, []);
  return <RadixTheme {...props} appearance={appearance} />;
}
