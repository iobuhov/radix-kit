/**
 * This file was generated from LayoutClassic.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export interface LayoutClassicContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    topbar?: ReactNode;
    sidenav?: ReactNode;
    content?: ReactNode;
}

export interface LayoutClassicPreviewProps {
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
    topbar: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    sidenav: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}
