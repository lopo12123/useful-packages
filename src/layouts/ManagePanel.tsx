import "./ManagePanel.scss";
import OneQuote from "../components/OneQuote";
import { useState } from "react";

export interface ISortConfig {
    name: string
    sort: string  // 'vanilla' | 'react' | 'vue' | 'node' | '',
    keyword: string
    desc: string
}

export default function ManagePanel({ onSort }: { onSort: (config: ISortConfig) => void }) {
    const [ sortInfo, setSortInfo ] = useState<ISortConfig>({
        name: '',
        sort: '',
        keyword: '',
        desc: ''
    })

    const doReset = () => {
        setSortInfo({
            name: '',
            sort: '',
            keyword: '',
            desc: ''
        })
    }
    const doSearch = () => {
        onSort(sortInfo)
    }

    return (
        <div className="manage-panel">
            <OneQuote/>
            <div className="manage-panel_btn-group">
                <div className="btn" onClick={ doReset }>RESET</div>
                <div className="btn" onClick={ doSearch }>SEARCH</div>
            </div>
            <div className="manage-panel_sort_group">
                <div className="title">包名</div>
                <input type="text" className="insert"
                       placeholder="请输入包名（部分）"
                       value={ sortInfo.name }
                       onChange={ e => setSortInfo(prev => ({ ...prev, name: e.target.value })) }/>
            </div>
            <div className="manage-panel_sort_group">
                <div className="title">分类</div>
                <select className="dropdown"
                        value={ sortInfo.sort }
                        onChange={ e => setSortInfo(prev => ({ ...prev, sort: e.target.value })) }>
                    <option value="">All</option>
                    <option value="vanilla">Vanilla</option>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                    <option value="node">Node</option>
                </select>
            </div>
            <div className="manage-panel_sort_group">
                <div className="title">关键词</div>
                <input type="text" className="insert"
                       placeholder="请输入关键词（单个）"
                       value={ sortInfo.keyword }
                       onChange={ e => setSortInfo(prev => ({ ...prev, keyword: e.target.value })) }/>
            </div>
            <div className="manage-panel_sort_group">
                <div className="title">描述</div>
                <input type="text" className="insert"
                       placeholder="请输入描述内容（部分）"
                       value={ sortInfo.desc }
                       onChange={ e => setSortInfo(prev => ({ ...prev, desc: e.target.value })) }/>
            </div>
        </div>
    )
}