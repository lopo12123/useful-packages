import "./ListPanel.scss";
import { ISortConfig } from "./ManagePanel";
import { useEffect, useState } from "react";
import { getPackageList, PackageDetail } from "../scripts";
import toast from "react-hot-toast";
import PackageCard from "../components/PackageCard";

export default function ListPanel({ config }: { config: ISortConfig }) {
    const [ storeList, setStoreList ] = useState<PackageDetail[]>([])
    const [ displayList, setDisplayList ] = useState<PackageDetail[]>([])

    useEffect(() => {
        getPackageList()
            .then(list => {
                setStoreList(list)
                setDisplayList(list)
            })
            .catch(err => {
                toast.error(err.toString)
            })
    }, [])

    useEffect(() => {
        const { name, sort, keyword, desc } = config

        if(name.trim() === '' &&
            sort.trim() === '' &&
            keyword.trim() === '' &&
            desc.trim() === '') return

        setDisplayList(storeList.filter(item => {
            return (name.trim() === '' || item.name.includes(name))
                && (sort.trim() === '' || item.sort.includes(sort))
                && (keyword.trim() === '' || item.keywords.includes(keyword))
                && (desc.trim() === '' || item.desc.includes(desc) || item.brief.includes(desc))
        }))
    }, [ config ])

    return (
        <div className="list-panel">
            {
                displayList.map((packageInfo, idx) =>
                    <PackageCard key={ idx } detail={ packageInfo }/>)
            }
        </div>
    )
}