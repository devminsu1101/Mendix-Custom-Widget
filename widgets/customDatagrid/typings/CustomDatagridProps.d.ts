/**
 * This file was generated from CustomDatagrid.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export type ColumnWidthEnum = "autoFill" | "manual";

export type AlignmentEnum = "left" | "center" | "right";

export interface ColumnsType {
    columnContent?: ListAttributeValue<string | Big | Date>;
    header?: DynamicValue<string>;
    columnWidth: ColumnWidthEnum;
    alignment: AlignmentEnum;
}

export interface ColumnsPreviewType {
    columnContent: string;
    header: string;
    columnWidth: ColumnWidthEnum;
    alignment: AlignmentEnum;
}

export interface CustomDatagridContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    columns: ColumnsType[];
}

export interface CustomDatagridPreviewProps {
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
    datasource: {} | { caption: string } | { type: string } | null;
    columns: ColumnsPreviewType[];
}
