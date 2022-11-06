import "./ListPanel.scss";
import { ISortConfig } from "./ManagePanel";

export default function ListPanel({ config }: { config: ISortConfig }) {
    return (
        <div className="list-panel">
            列表展示容器 <br/>
            { JSON.stringify(config) }
        </div>
    )
}