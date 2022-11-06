import "./PackageCard.scss";
import { PackageDetail } from "../scripts";
import toast from "react-hot-toast";

export default function PackageCard({ detail }: { detail: PackageDetail }) {
    return (
        <div className="package-card">
            <div className="name"
                 title="open in npm"
                 onClick={ () => {
                     window.open(`https://www.npmjs.com/package/${ detail.name }`, '__blank')
                 } }>
                { detail.name }
            </div>
            <div>{ detail.sort.join(' | ') }</div>
            <div className="code">{ detail.install }</div>
            <div className="kv-line">
                <span className="label">Repository</span>
                <span className="value"
                      title="view in github"
                      onClick={ () => {
                          window.open(detail.github, '__blank')
                      } }>
                    { detail.github }
                </span>
            </div>
            <div className="kv-line">
                <span className="label">Homepage</span>
                <span className="value"
                      title="view in homepage"
                      onClick={ () => {
                          if(detail.homepage !== '')
                              window.open(detail.homepage, '__blank')
                          else
                              toast.error('No homepage for this package!')
                      } }>
                    { detail.homepage || 'none' }
                </span>
            </div>
            <div className="kv-line">
                <span className="label">Keywords</span>
                <span className="value">{ detail.keywords.join(' | ') }</span>
            </div>
            <div className="multi-line">
                <div className="label">Brief</div>
                <div className="value">{ detail.brief }</div>
            </div>
            <div className="multi-line">
                <div className="label">Description</div>
                <div className="value">{ detail.desc }</div>
            </div>
        </div>
    )
}