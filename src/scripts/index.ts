import toast from "react-hot-toast";

// 复制文本内容
export const doCopy = (val: string) => {
    try {
        const _box = document.getElementById('copy-adaptor') as HTMLInputElement
        _box.value = val
        _box.select()
        document.execCommand('copy', true)
        toast.success('[OK] copied!')
    }
    catch (e) {
        console.error(e)
        toast.error('[Error] fail to copy!')
    }
}

// 单项详细信息
export interface PackageDetail {
    // name of the package
    name: string
    // sort of the package
    sort: string[]  // ('vanilla' | 'react' | 'vue' | 'node')
    // script to install (in npm, yarn as well)
    install: string
    // repository url
    github: string
    // homepage url
    homepage: string
    // 简短描述
    brief: string
    // 作者描述
    desc: string
    // 关键字
    keywords: string[]
}

// 获取所有数据信息
export const getPackageList = (): Promise<PackageDetail[]> => {
    return fetch('/packageInfo.json')
        .then(res => res.json())
}