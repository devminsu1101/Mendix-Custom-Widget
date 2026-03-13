import HelloWorldSample from "./components/HelloWorldSample";
import { CustomDatagridPreviewProps } from "../typings/CustomDatagridProps";


export default function preview (props: CustomDatagridPreviewProps) {

    return (        
        <HelloWorldSample {...props} /> 
    )
}

// export class preview extends Component<CustomDatagridPreviewProps> {
//     render(): ReactNode {
//         return <HelloWorldSample sampleText={this.props.sampleText} />;
//     }
// }

export function getPreviewCss(): string {
    return require("./ui/CustomDatagrid.css");
}
