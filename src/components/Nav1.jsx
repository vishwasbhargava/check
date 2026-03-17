import react from "react";
const Nav1 =()=>{
    return(
        
            <nav className="mt-10 flex justify-center gap-10">
    <Link to="/" >Home</Link>
     <Link to="/user" >User</Link>
      <Link to="/about" >About</Link>
</nav>
        
    );
};
export default Nav1;