// import react, { useState } from "react";




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
import react, { useState } from "react";
import Card from "./components/Card";
function App(){
    const data = [
        {name : "vishwas",profession:"artist", image:'https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',friend:false},
        {name : "suresh",profession:"cricketer", image:'https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',friend:false},
        {name : "honey",profession:"footballer", image:'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',friend:true},
        {name : "rocky",profession:"hockeyplayer", image:'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',friend:false}]
        const [realdata,setrealdata]= useState(data);
        const handleFriendClick=(Cardindex)=>{
            setrealdata((previous)=>{
             return   previous.map((item,index)=>{if(index===Cardindex){
                return {...item,friend: !item.friend}

            }
        return item;})
        })
        }
        return(
            <>
            <div>
        {data.map((item,index)=>(
            <Card values = {item} handleClick={handleFriendClick}/>
        ))}
            </div>
            
            </>
        )
        

}
export default App;
