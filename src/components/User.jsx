import react from "react";
import {Link} from "react-router-dom";
const User = () => {
  return (
    
       <div className="bg-zinc-100 w-1/2 m-auto mt-10">
        <h1 className=" text-red-200 text-5xl mb-2">user</h1>
        <div className="flex w-1/2 flex-col mt-3">
          <Link className="p-3 text-2xl mb-3 bg-red-200 hover:bg-red-300" to= "/user/john">john</Link>
           <Link className="p-3 text-2xl mb-3 bg-red-200 hover:bg-red-300" to="/user/ayush">ayush</Link>
            <Link className="p-3 text-2xl mb-3 bg-red-200 hover:bg-red-300" to="/user/anubhav">anubhav</Link>
        </div>
        <p className="mb-2 text-zinc-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero debitis nulla voluptates adipisci, cum id quos ullam, neque modi aut quod nam veniam ad eos dolorem minima a ducimus. Quisquam?

        </p>
        <button className="p-3 bg-red-300 text-white">  explore more  </button>
        </div>
    
    
  );
};
export default User;
