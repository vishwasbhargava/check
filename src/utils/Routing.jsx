import react from "react";
import Home from "./componenets/Home"
import User from "./components/User";
import About from "./components/About";
const Routing = ()=>{
    return(
        <Routes>
    <Route path ="/" element={<Home/>} />
    <Route path ="/user" element={<User/>} />
    <Route path ="/about" element={<About/>} />

   
</Routes>

    )
}
export default Routing;