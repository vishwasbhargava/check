import react from "react";
function Carding({data,index,handleClick}){
    const {image,name,artist,added} = data;
    return(
        <div className="w-60 bg-zinc-600 p-4 rounded-md flex gap-4 pb-8 relative">
            <div className="w-20 h-20 bg-orange-300 rounded-md">
                <img className="w-full h-full object-cover"  src={image} alt="" />
            </div>
            <div className="">
                <h3 className="text-xl font-semibold">{name}</h3>
                <h6 className="text-sm font-semibold">artist name</h6>
            </div>
            <div>
                 <button onClick={()=>handleClick(index)} className= {`px-3 py-4 ${added ? "bg-blue-600":"bg-red-500"} text-white whitespace-nowrap absolute rounded-full text-sm bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%`}>{added === false ? "addtofav ":"added"}</button>

            </div>
           
          
        </div>
    )
}
export default Carding;