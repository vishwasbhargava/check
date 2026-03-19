import react from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";
import UserDetail from "../components/UserDetail";
const Routing = ()=>{
    return(
        <Routes>
    <Route path ="/" element={<Home/>} />
    <Route> path ="/user" element={<User/>}
    <Route path ="/user/:name" element={<UserDetail/>} />
     </Route> 
     
    <Route path ="/about" element={<About/>} />
    {/* C:/Users/manish bhai/Desktop/react/src/utils/Routing.jsx:3:17
2  |  import react from "react";
3  |  import { Routes, Route } from "react-router-dom";
4  |  import Home from "./components/Home";
   |                    ^
5  |  import User from "./components/User";
6  |  import About from "./components/About"; */}

   
</Routes>

    )
}
export default Routing;