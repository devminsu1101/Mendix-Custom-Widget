/**
 * This file was generated from CheckTextbox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, WebIcon } from "mendix";

export interface CheckTextboxContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    textAttribute: EditableValue<string>;
    labelText: string;
    inputIcon?: DynamicValue<WebIcon>;
    onClickAction?: ActionValue;
}

export interface CheckTextboxPreviewProps {
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
    textAttribute: string;
    labelText: string;
    inputIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    onClickAction: {} | null;
}
