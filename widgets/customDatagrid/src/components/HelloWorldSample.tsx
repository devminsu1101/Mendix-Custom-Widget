import { CustomDatagridContainerProps, CustomDatagridPreviewProps } from "typings/CustomDatagridProps";

export default function HelloWorldSample (props: CustomDatagridContainerProps | CustomDatagridPreviewProps) {
    return (
        <div className="widget-hello-world">
            Hello, {props.sampleText}
        </div>
    )
}
