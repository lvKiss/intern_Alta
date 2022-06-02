import { Menubar } from "./Menubar"
import Person from "./Person"
import Topbar from "./Topbar"


export const Info = () => {
    return(
        <div className="back">

        <div className="bg">
        <Topbar CurrentTitle="Thông tin cá nhân"/>
        <Menubar/>
        <Person/>
            
        </div>
        </div>
    )
}
export default Info