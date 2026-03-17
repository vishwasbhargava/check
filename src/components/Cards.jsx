import react from "react";
import Carded from "./Carded";
function Cards({users}){
    return (
          
        <div className="w-full h-96 max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap">
            {users.map((item,index)=>{
                return <Carded users={users} key={index}  />
            })}
             
        </div>
    )
     
}
    
    
export default Cards; 