import react from "react";
function Carded({users}){
    {users.map((item,index )=>{
            return(
                
        <div className="w-52 h-full bg-sky-300 rounded-lg flex flex-col items-center p-2">
            <div className="image w-[3vw] h-[3vw] rounded-full bg-blue-200 overfllow-hidden">
                <img className="w-full h-full object-cover" src="" alt="" />
            </div>
            <div>
                <h1 className="mt-1 text-xl text-center font-semibold">vishwas</h1>
            <p className=" mt-1 text-center text-xs font-semibold leading-1 tracikng-tight">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam molestiae, nobis nemo assumenda qui ex libero aliquid quaerat. Facere, neque!</p>
            </div>
            <button className="px-3 py-1 bg-red-600 text-xs font-semibold rounded-full mt-2">remove it</button>
            

        </div>
    )
}

    )}}
    
    

export default Carded;