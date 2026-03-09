import react from "react";
function Card(){
    const data =[
        {name:"mahiyave",description:"happy to see you you are welcome"},
        {name:"mahive",description:"happy to see you you are welcome"}

    ]
    const handleClick= ()=>{alert("chal raha hai")};
    return(
        <div className="w-full h-screen bg-zinc-200 flex flex-col items-center gap-10 justify-center">
         {data.map((item,index)=>(
               <div className=" w-90 px-3 py-2 bg-zinc-300 rounded">
                <h3 className="text-semibold text-xl">{item.name}</h3>
                <p className="text-xs mt-2">{item.description}</p>
                <button onMouseOver={handleClick} className="px-2 py-1text-xs bg-blue-400 text-zinc-100 rounded font-semibold">download now</button>
            </div>
         ))}
        </div>
    )
}
// function Card(){
//     return(
//         <div className="w-full h-screen flex justify-center item-center bg-zinc-300" >
//             <div className="w-52 h-60 bg-zinc-500 rounded-md overflow-hidden">
//                 <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

//             </div>

//         </div>
//     )
// }
export default Card;
