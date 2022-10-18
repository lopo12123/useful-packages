import './App.css'
import { useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import PackageBlock, { PackageInfo } from "./PackageBlock";

type SearchTypeList = 'sort' | 'brief' | 'desc' | 'keywords'

function App() {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ packageList, setPackageList ] = useState<PackageInfo[]>([])
    const [ displayList, setDisplayList ] = useState<PackageInfo[]>([])

    const [ searchType, setSearchType ] = useState<SearchTypeList>('sort')
    const [ searchText, setSearchText ] = useState('')

    useEffect(() => {
        setIsLoading(true)
        fetch('./packageInfo.json')
            .then(res => res.json())
            .then(res => {
                setPackageList(res)
                setDisplayList(res)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                console.error(err)
            })
    }, [])

    const doFilter = useCallback(() => {
        if(searchText.trim() === '') {
            setDisplayList(packageList)
            toast.success('[OK] 已重置')
            return;
        }
        if(searchType === 'sort' || searchType === 'keywords')
            setDisplayList(packageList.filter(item => {
                for (let i = 0; i < item[searchType].length; i++) {
                    if(item[searchType][i].includes(searchText)) return true
                }
                return false
            }))
        else
            setDisplayList(packageList.filter(item => {
                return (item[searchType] as string).includes(searchText)
            }))
        toast.success('[OK] filtered!')
    }, [ packageList, searchType, searchText ])

    return (
        <div className="app">
            <input type="text" id="copy-adaptor"/>
            <Toaster/>
            <div className="search-box">
                <select className="search-box__radio" value={ searchType }
                        onChange={ e => setSearchType(e.target.value as SearchTypeList) }>
                    <option value="sort">分类</option>
                    <option value="brief">收录自述</option>
                    <option value="desc">package.json 描述</option>
                    <option value="keywords">关键字</option>
                </select>
                <input className="search-box__input" placeholder="输入搜索内容" value={ searchText }
                       onChange={ e => setSearchText(e.target.value) }/>
                <div className="search-box__confirm" onClick={ doFilter }>搜索</div>
            </div>
            {
                isLoading
                    ? (
                        <div className="loading-box">
                            <div className="loading-icon">'</div>
                            <div className="loading-text">加载中</div>
                        </div>
                    )
                    : displayList.map((item, idx) =>
                        <PackageBlock key={ idx } idx={ idx } detail={ item }/>)
            }
        </div>
    )
}

export default App
