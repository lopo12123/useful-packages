# useful-packages

some useful packages

``` ts
interface PackageInfo {
    // name of the package
    name: string
    // sort of the package
    sort: ('react' | 'vue' | 'node' | 'other')[]
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
```