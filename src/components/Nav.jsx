import react from "react";
import styles from "./style.module.css"
function Nav({data}){
    return(
        <div className="w-full px-4 py-3 fllex justify-between items-center">
            <h1>
                orange
            </h1>
            <div className="flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-3">
                <h3>favorites</h3>
                <h4>{data.filter(item=>item.added).length}</h4>
            </div>
        </div>
    )
}
export default Nav;