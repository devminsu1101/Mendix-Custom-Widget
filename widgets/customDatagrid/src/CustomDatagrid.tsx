import { CustomDatagridContainerProps } from "typings/CustomDatagridProps";
import "./ui/CustomDatagrid.css";

export default function CustomDatagrid (
  props: CustomDatagridContainerProps
) {

  const { datasource, columns } = props

  if (datasource.status === "loading") {
    return <div>Loading ...</div>
  }

  return (
    <div className="custom-datagrid">
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th
                key={`header_${index}`}
                style={{
                  textAlign: col.alignment, 
                  width: col.columnWidth === "manual" ? "200px" : "auto"
                }}
              >
                {col.header?.value || "No Title"}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datasource.items?.map((item) => (
            <tr key={item.id}>
              {columns.map((col, colIndex) => {
                const attributeValue = col.columnContent?.get(item)

                return (
                  <td
                    key={`${item.id}_${colIndex}`}
                    style={{ textAlign: col.alignment }}
                  >
                    {attributeValue?.status === "available"
                      ? attributeValue.displayValue
                      : ""}
                  </td>
                )
                })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
