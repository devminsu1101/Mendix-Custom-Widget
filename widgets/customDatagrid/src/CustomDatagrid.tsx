import { CustomDatagridContainerProps } from "../typings/CustomDatagridProps";
import HelloWorldSample from "./components/HelloWorldSample";
import "./ui/CustomDatagrid.css";

export default function CustomDatagrid (props: CustomDatagridContainerProps) {

    return (
        <HelloWorldSample {...props}/>
    )
}
