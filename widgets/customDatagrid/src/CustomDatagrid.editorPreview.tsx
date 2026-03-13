import HelloWorldSample from "./components/HelloWorldSample";

export default function preview () {

    return (        
        <HelloWorldSample/> 
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
