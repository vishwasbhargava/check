import react from "react";
import Carded from "./Carded";
function Cards({users,handleRemove}){
    return (
          
        <div className="w-full h-96 max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap">
            {users.map((item,index)=>{
                return <Carded id={index} user={item} key={index} handleRemove={handleRemove} />
            })}
             
        </div>
    )
     
}
    
    
export default Cards; 