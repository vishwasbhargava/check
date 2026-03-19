import react from "react";
import { useNavigate, useParams } from "react-router-dom";
const UserDetail = ()=>{
const {name} = useParams();
const navigate=useNavigate()
const GoBackHandler = ()=>{
    navigate(-1);
  
    
}
    
    return(
           <div className="bg-zinc-100 w-1/2 m-auto mt-10">
        <h1 className=" text-red-200 text-5xl mb-2">UserDetail</h1>
        <h1 className="text-2xl mt-2 text-green-200"> hi! {name}</h1>
        

        
        <button onClick={GoBackHandler} className="px-3 py-2  bg-zinc-300 text-white font-semibold">  go back  </button>
        </div>
    )
};
export default UserDetail;