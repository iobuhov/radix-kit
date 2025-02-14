/**
 * This file was generated from ThemeProvider.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type AppearanceEnum = "auto" | "dark" | "light" | "inherit";

export type RadiusEnum = "none" | "small" | "medium" | "large" | "full";

export interface ThemeProviderContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    appearance: AppearanceEnum;
    radius: RadiusEnum;
    content?: ReactNode;
}

export interface ThemeProviderPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    appearance: AppearanceEnum;
    radius: RadiusEnum;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}
