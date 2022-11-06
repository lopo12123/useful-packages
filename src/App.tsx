import { Toaster } from "react-hot-toast";
import ListPanel from "./layouts/ListPanel";
import ManagePanel from "./layouts/ManagePanel";

export default function App() {
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
            <ManagePanel/>
            <ListPanel/>
        </div>
    )
}
