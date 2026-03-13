import { Component, ReactNode, createElement } from "react";
import { CheckTextboxPreviewProps } from "../typings/CheckTextboxProps";

export class preview extends Component<CheckTextboxPreviewProps> {
    render(): ReactNode {
        const { labelText, textAttribute } = this.props;

        return (
            <div className="mx-textbox form-group mycustom-checktextbox-container">
                {/* 에디터 화면용 라벨 */}
                {labelText && (
                    <label className="control-label col-sm-3">{labelText}</label>
                )}

                {/* 에디터 화면용 인풋 영역 */}
                <div className="col-sm-9">
                    <div className="form-control" style={{ 
                        display: "flex", 
                        alignItems: "center",
                        backgroundColor: "#f8f8f8", // 에디터에서 구분하기 쉽게 배경색 부여
                        border: "1px dashed #ccc"    // 에디터용 가이드 라인
                    }}>
                        {/* 아이콘 자리 표시 */}
                        <div style={{ padding: "0 10px", color: "#999" }}>
                            <span className="glyphicon glyphicon-search"></span>
                        </div>
                        
                        {/* 실제 속성명이 표시되는 인풋 영역 */}
                        <div style={{ color: "#666", fontStyle: "italic" }}>
                            {textAttribute ? `[${textAttribute}]` : "Select Attribute..."}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export function getPreviewCss(): string {
    // 위젯의 CSS를 에디터에도 적용합니다.
    try {
        return require("./ui/CheckTextbox.css");
    } catch (e) {
        return "";
    }
}