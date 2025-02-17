/**
 * This file was generated from Badge.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export type SizeEnum = "s1" | "s2" | "s3" | "object";

export type SizeXsEnum = "s1" | "s2" | "s3";

export interface BadgeContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    text: string;
    size: SizeEnum;
    sizeInitial: string;
    sizeXs: SizeXsEnum;
}

export interface BadgePreviewProps {
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
    text: string;
    size: SizeEnum;
    sizeInitial: string;
    sizeXs: SizeXsEnum;
}
