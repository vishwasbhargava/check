import react from "react";
import { Link, NavLink } from "react-router-dom";
const Nav1 =()=>{
    return(
        
            <nav className="mt-10 flex justify-center gap-10">
    <NavLink 
    to="/" ><span   className={(e)=>[
        e.isActive ? "text-blue-600":"",
        e.isActive ? "font-bold":"",
    ].join("")}>home</span></NavLink>
     <NavLink className={(e)=>{return[e.isActive ? "text-red-300":"",
        e.isActive ? "bold":"",
     ].join("")}}
      to="/user" >User</NavLink>
      <NavLink style={(e)=>{return{color:e.isActive ? "tomoto":""}}}
       to="/about" >About</NavLink>
</nav>
        
    );
}
export default Nav1;