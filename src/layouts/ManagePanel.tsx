import "./ManagePanel.scss";
import OneQuote from "../components/OneQuote";

export default function ManagePanel() {
    return (
        <div className="manage-panel">
            <OneQuote/>
            <div className="manage-panel_btns">
                <div className="btn">筛选</div>
                <div className="btn">重置</div>
            </div>
            <div className="manage-panel_sort font-green">
                分类: 1 | 2 | 3 | 4
            </div>
        </div>
    )
}