import { PackageDetail } from "../scripts";

export default function PackageCard({ detail }: { detail: PackageDetail }) {
    return (
        <div>
            { JSON.stringify(detail) }
        </div>
    )
}