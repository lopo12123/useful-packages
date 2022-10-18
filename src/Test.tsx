import { useCallback, useState } from "react";

export default function Test() {
    const [ val, setVal ] = useState(1)

    const logVal = useCallback(() => {
        console.log(val)
    }, [ val ])

    return <div>
        <span>val is: { val }</span>
        <button onClick={ () => {
            setVal(val => val + 1)
            logVal()
        }
        }>aa
        </button>
    </div>
}