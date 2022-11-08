import { Toaster } from "react-hot-toast";
import ListPanel from "./layouts/ListPanel";
import ManagePanel, { ISortConfig } from "./layouts/ManagePanel";
import { useState } from "react";
import Box from "../test/aa";

export default function App() {
    const [ config, setConfig ] = useState<ISortConfig>({
        name: '',
        sort: '',
        keyword: '',
        desc: ''
    })

    return (
        <div style={ {
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        } }>
            <input type="text" id="copy-adaptor"/>
            <Toaster/>
            <ManagePanel onSort={ setConfig }/>
            <ListPanel config={ config }/>
        </div>
    )
}
