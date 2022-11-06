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
                const validPackages = list.filter(item => item.name !== '')
                setStoreList(validPackages)
                setDisplayList(validPackages)
            })
            .catch(err => {
                toast.error(err.toString)
            })
    }, [])

    useEffect(() => {
        const { name, sort, keyword, desc } = config

        setDisplayList(storeList.filter(item => {
            return (name.trim() === '' || item.name.includes(name))
                && (sort.trim() === '' || item.sort.includes(sort))
                && (keyword.trim() === '' || item.keywords.includes(keyword))
                && (desc.trim() === '' || item.desc.includes(desc) || item.brief.includes(desc))
        }))
    }, [ config ])

    return (
        <div style={ {
            position: 'relative',
            width: 'calc(100% - 300px)',
            height: '100%',
            padding: '20px',
            overflow: 'auto'
        } }>
            {
                displayList.map((packageInfo, idx) =>
                    <PackageCard key={ idx } detail={ packageInfo }/>)
            }
        </div>
    )
}