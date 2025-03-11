/**
 * This file was generated from Tabs.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue } from "mendix";

export interface TabsType {
    caption: DynamicValue<string>;
    value: number;
    content: ReactNode;
}

export interface TabsPreviewType {
    caption: string;
    value: number | null;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}

export interface TabsContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    tabs: TabsType[];
    defaultValue: number;
}

export interface TabsPreviewProps {
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
    tabs: TabsPreviewType[];
    defaultValue: number | null;
}
