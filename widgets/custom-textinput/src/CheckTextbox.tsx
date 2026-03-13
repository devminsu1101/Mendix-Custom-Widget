import { Component, ReactNode, createElement } from "react";
import { CheckTextboxContainerProps } from "../typings/CheckTextboxProps";
// import { BadgeSample } from "./components/BadgeSample";
import "./ui/CheckTextbox.css";

export class CheckTextbox extends Component<CheckTextboxContainerProps> {

    render(): ReactNode {
        const { labelText, textAttribute, inputIcon, class: className, style } = this.props

        const hasError = !!textAttribute.validation 

        const containerClasses = [
            "mx-textbox form-group mycustom-checktextbox-container", 
            hasError ? "has-error" : "is-valid" , 
            className
        ].join(" ")

        return (
            // container 
            <div 
                className={containerClasses} // Atlas UI 의 form-group 구조 재사용 
                style={style}
            >
                {/* label */}
                {labelText && (
                    <label className="control-label col-sm-3">
                        {labelText}
                    </label> 
                )}

                {/* input container */}
                <div className="col-sm-9">
                    <div className="form-control mycustom-input-wrapper">

                        {/* input icon */}
                        {inputIcon && inputIcon.status === "available" && inputIcon.value && (
                            <div className="mycustom-icon-container">
                                {inputIcon.value.type === "icon" 
                                ? ( <i className={inputIcon.value.iconClass}/>)
                                // : ( <img src={inputIcon.value.iconUrl} alt="icon"/>)}
                                : ( <i className="glyphicon glyphicon-info-sign"/> )}
                            </div>
                        )}

                        {/* input */}
                        <input
                            type="text"
                            className="mycustom-inner-input"
                            value={textAttribute.value || ""}
                            readOnly={textAttribute.readOnly}
                            onChange={event => textAttribute.setValue(event.target.value)}
                            // placeholder={textAttribute.placeholder} 
                        />
                    </div>
                </div>
            </div>
            // <BadgeSample
            //     type={this.props.checktextboxType}
            //     bootstrapStyle={this.props.bootstrapStyle}
            //     className={this.props.class}
            //     clickable={!!this.props.onClickAction}
            //     defaultValue={this.props.checktextboxValue ? this.props.checktextboxValue : ""}
            //     onClickAction={this.onClickHandler}
            //     style={this.props.style}
            //     value={this.props.valueAttribute ? this.props.valueAttribute.displayValue : ""}
            // ></BadgeSample>
        );
    }

    // private onClick(): void {
    //     if (this.props.onClickAction && this.props.onClickAction.canExecute) {
    //         this.props.onClickAction.execute();
    //     }
    // }
}
