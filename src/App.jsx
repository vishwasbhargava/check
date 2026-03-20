// import react, { useState } from "react";

//  const { RiFacebookBoxFill } = require("react-icons/ri");

// function App() {
//   const [val,setval] = useState({name : "vishwas" , isbanned:false});
//   return (
//   <div className="p-4">
//  <h1>{val.name}</h1>
//  <h2>{val.isbanned.toString()}</h2>
//  <button onClick={()=>setval({...val,isbanned:!val.isbanned})} className={`px-3 py-2 text-white ${val.isbanned ? " bg-blue-600":"bg-red-500"} rounded-full mt-2`}>change</button>

//   </div>
//   );
// }

// function App(){
//   const [val,setval] = useState([1,2,3,4,5,6])
//   return (
//     <div>
//       {val.map(item=><h1>{item}</h1>)}
//       <button onClick={()=>setval(()=>{return val.filter((item,index)=>index!=val.length-1)})} className="px-2 py-1 text-xs bg-blue-600 mt-2 text-white rounded-full">click</button>
//     </div>
//   )
// }
// export default App;
// function doc() {
//   const [val, setval] = useState([1, 2, 3, 4, 5, 6]);
//   return (
//     <div>
//         {val.map(item=><h1>{item}</h1>)}
//         <button onClick={()=>setval(()=>{return val.filter ((item,index)=> index!= val.item.length-1)})} className="px-2 py-1 bg-blue-600 text-xs text-white rounded-full mt-2">click</button>

//     </div>

//   )
// }
// function App() {
//   const [val, setval] = useState({ name: "vishwas", isbanned: false });
//   return (
//     <div>
//         <h1>{val.name}</h1>
//         <h2>{val.isbanned.toString()}</h2>
//         <button onClick={()=>setval({...val,isbanned:!val.isbanned})} className={`px-2 py-1 text-white ${val.isbanned ? "bg-blue-600":"bg-red-500"} text-xs rounded-full mt-2`}>change</button>
//     </div>
//   )
// }
// export default App;
// function App (){
//   const [val,setval] = useState([1,2,3,4,5,6]);
//   return(
//     <div>
//       {val.map(item=><h1>{item}</h1>)}
//       <button onClick={()=>setval(()=>val.filter(item=> item%2!==0))} className="px-2  py-1 text-white bg-blue-500 text-xs rounded-full mt-2">click</button>
//     </div>
//   )
// }
// function App (){
//   const [val,setval]= useState([1,2,3,4,5,6]);
//   return (
//     <div>
//       {val.map(item=><h1>{item}</h1>)}
//       <button onClick={()=>setval(()=>val.filter((item,index)=> index!=2))} className="px-2 py-1 text-white text-xs bg-blue-600 mt-2 rounded-full">click</button>
//     </div>
//   )
// import react from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import Fast from "./components/Fast";
// function App({Fast}){
//   return(
//     <div>
//     <Fast/>
//     </div>
//   )
// }
// function App(){
//     return(
//         <div className="w-full h-screen flex justify-center item-center " >
//             <div className="relative w-60 h-30  rounded-md overflow-hidden">
//              <img className="shrink-0 -translate-x-[0%] w-full h-full object-cover" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//              <img className="shrink-0 -translate-x-[15%] w-full h-full object-cover" src="https://images.unsplash.com/photo-1772470684953-9f6ff5e4f9c2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                 <span className="w-8 h-8 flex item-center justify-center bg-blue-1000">
//                   <FaLongArrowAltRight size={".7em"} />

//                 </span>

//             </div>

//         </div>
//     )
// }
// export default App ;
// import react from "react";
// import Card from "./components/Card";
// function App(){
//     return(
//         <div>
//             <Card text ="know more"  color = "bg-blue-600"/>
//             <Card text = "download" color = "bg-red-500"/>
//         </div>
//     )
// }
// props
// import react, { useState } from "react";
// import Card from "./components/Card";
// import { TbFriends } from "react-icons/tb";
// function App(){
//     const raw = [
//         {name : "vishwas",profession:"artist", image:'https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',friends:false},
//         {name : "suresh",profession:"cricketer", image:'https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',friends:false},
//         {name : "honey",profession:"footballer", image:'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',friends:true},
//         {name : "rocky",profession:"hockeyplayer", image:'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',friends:false}]
//         const [data,setData]= useState(raw);
//         const handleClick = (changingIndex)=>{setData((prev)=>{return prev.map((item,index)=>{if(index===changingIndex)return{...item, friends:!item.friends};
//         return item;

//     })})}
//         return(
//             <>
//             <div>
//         {data.map((item,index)=>(
//             <Card key={index} index={index} values = {item} handleClick={handleClick}/>
//         ))}
//             </div>

//             </>
//         )

// }
// export default App;
//props drilling
// import react, { useState } from "react";
// import Nav from "./components/Nav";
// import Carding from "./components/Carding"
// function App(){
//     const data =[
//         {image:'https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:"hdh",artist:"arjit",added:false},
//         {image:'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:"vsgdgv",artist:"sggh",added:false},
//         {image:'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:"shdh",artist:"shks",added:false},
//         {image:'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:"gsdj",artist:"jslask",added:false},
//     ]
//     const [songData,setSongData]= useState(data);
//     const handleClick = (itemindex)=>{setSongData((prev)=>{return prev.map((item,itemindex)=>{
//         if(index===itemindex)return{
//             ...item,added:!item.added
//         };
//         return item;
//     })})}

//     return(
//         <div>
//             <Nav data ={songData}/>
//             <div className="px-20 mt-10 flex flex-wrap gap-4">
//                 {songData.map(obj=>(<Carding data={obj} key={index} index={index} handleClick={handleClick} /> ) )}
//                  </div>

//         </div>

//     )
// }
// export default App;

// use ref
// import react, { useRef } from "react";

// function App() {
//   const name = useRef(null);
//   const age = useRef(null);
//   const email = useRef(null);
//   const handleClick = (details)=>{
//     details.preventDefault();
//     console.log(name.current.value ,age.current.value , email.current.value );
//   }

//   return (
//     <form action="" onSubmit={handleClick}>
//       <input ref={name} type="text" placeholder="name" />
//       <input ref={age} type=" text" placeholder="age" />
//       <input ref={email} type="text" placeholder="email" />
//       <input type="submit" />
//     </form>
//   );
// }
// export default App;
// component
//   import react, { useState } from "react";
//   function App(){

//     const [val,setval]= useState({name:"" ,age:""})
//     const handleClick = (event)=>{
//         event.preventDefault();
//         console.log(val);

//     }
//     return(
//         <form action="" onSubmit={handleClick}>
//             <input onChange={(event)=>setval({...val,name:event.target.value })} type="text" placeholder="name" />
//             <input onChange={(event)=>setval({...val,age:event.target.value })} type="text" placeholder="age" />
//             <input  type="submit" />
//         </form>
//     )
//   }
//   export default App;



// import react from "react";
// import Form from "./components/form";

// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }
// export default App;

// import react, { useState } from "react";
// import Cards from "./components/Cards";
// import Form from "./components/form";
// // import { data } from "autoprefixer";
// function App(){
//   const [users,setUsers] = useState([]);
//   const handleFormSubmitData = (data)=>{
//     setUsers([...users,data])
//   }
//   const handleRemove=(id)=>{
//     console.log(id);
//     setUsers(()=>users.filter((item,index)=>index!=id))}
  
//   return(
//     <div className="w-full h-full bg-zinc-600 flex items-center justify-center">
//       <div className="mx-auto">
//         <Cards users ={users} handleRemove={handleRemove}/>
//         <Form handleFormSubmitData={handleFormSubmitData}/>

//       </div>
//     </div>
//   )
// }
// export default App;
// import react from "react";
// // import {Link,Route,Routes} from "react-router-dom";
// // import Home from "./components/home";
// // import User from "./components/User";
// // import About from "./components/About";
// import Nav1 from "./components/Nav1";
// import Routing from "./utils/Routing";
// const App =()=>{
//     return(
//         <>
// <Nav1/>
// <Routing/>

        
//         </>
//     );
// };
// export default App;
// //  File: C:/Users/manish bhai/Desktop/react/src/utils/Routing.jsx:3:17
//   2  |  import react from "react";
//   3  |  import { Routes, Route } from "react-router-dom";
//   4  |  import Home from "./components/Home";
//      |                    ^
//   5  |  import User from "./components/User";
//   6  |  import About from "./components/About";
import Show from "./components/show";
import { Link,Routes,Route } from "react-router-dom";
import Home1 from "./components/Home1";
import Services from "./components/services";
const App = ()=>{
    return(
        <div className="pt-[5%] pl-[5%]">
            <nav className="flex justify-center gap-10">
                <Link to="/">Home1</Link>
                 <Link to="/show">Show</Link>
                 <Link to="/services">Services</Link>
                  

            </nav>
            <hr />
            <Routes>
                <Route path="/" element={Home1}/>
                <Route path="/show" element={Show}/>
                <Route to ="/services" element={Services}/>
            </Routes>
        </div>
    )
    
   
       
    
};
export default App;
