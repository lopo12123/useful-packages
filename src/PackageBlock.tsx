import "./PackageBlock.css";
import { doCopy } from "./misc";

export interface PackageInfo {
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

export default function PackageBlock({ idx, detail }: { idx: number, detail: PackageInfo }) {
    if(detail.name === '') return <></>

    return (
        <div className="package-block">
            <div className="idx-affix">{ idx + 1 }</div>
            <div className="info-line">
                <div className="part-of-2">
                    <div className="part-label">name</div>
                    <div className="part-value"
                         title={ `[click to copy] ${ detail.name || '--' }` }
                         onClick={ () => doCopy(detail.name || '--') }>
                        { detail.name || '--' }
                    </div>
                </div>
                <div className="part-of-2">
                    <div className="part-label">sort</div>
                    <div className="part-value"
                         title={ `[click to copy] ${ detail.sort.join(' | ') || '--' }` }
                         onClick={ () => doCopy(detail.sort.join(' | ')) }>
                        { detail.sort.join(' | ') || '--' }
                    </div>
                </div>
            </div>
            <div className="info-line">
                <div className="part-of-2">
                    <div className="part-label">install</div>
                    <div className="part-value"
                         title={ `[click to copy] ${ detail.install || '--' }` }
                         onClick={ () => doCopy(detail.install || '--') }>
                        { detail.install || '--' }
                    </div>
                </div>
                <div className="part-of-2">
                    <div className="part-label">github</div>
                    <div className="part-value"
                         title={ `[click to open] ${ detail.github }` }
                         onClick={ () => {
                             if(!!detail.github)
                                 window.open(detail.github, '__blank')
                         } }>
                        { detail.github || '--' }
                    </div>
                </div>
            </div>
            <div className="info-line">
                <div className="part-of-2">
                    <div className="part-label">brief</div>
                    <div className="part-value"
                         title={ `[click to copy] ${ detail.brief || '--' }` }
                         onClick={ () => doCopy(detail.brief || '--') }>
                        { detail.brief || '--' }
                    </div>
                </div>
                <div className="part-of-2">
                    <div className="part-label">homepage</div>
                    <div className="part-value"
                         title={ `[click to copy] ${ detail.homepage || '--' }` }
                         onClick={ () => doCopy(detail.homepage || '--') }>
                        { detail.homepage || '--' }
                    </div>
                </div>
            </div>
            <div className="info-line">
                <div className="part-label">desc</div>
                <div className="part-value"
                     title={ `[click to copy] ${ detail.desc || '--' }` }
                     onClick={ () => doCopy(detail.desc || '--') }>
                    { detail.desc || '--' }
                </div>
            </div>
            <div className="info-line">
                <div className="part-label">keywords</div>
                <div className="part-value"
                     title={ `[click to copy] ${ detail.keywords.join(' | ') || '--' }` }
                     onClick={ () => doCopy(detail.keywords.join(' | ') || '--') }>
                    { detail.keywords.join(' | ') || '--' }
                </div>
            </div>
            {/*<code>{ JSON.stringify(detail, null, 4) }</code>*/ }
        </div>
    )
}