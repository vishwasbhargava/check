import react, { useState } from "react";

// function doc() {
//   const [val, setval] = useState([1, 2, 3, 4, 5, 6]);
//   return (
//     <div>
//         {val.map(item=><h1>{item}</h1>)}
//         <button onClick={()=>setval(()=>{return val.filter ((item,index)=> index!= val.item.length-1)})} className="px-2 py-1 bg-blue-600 text-xs text-white rounded-full mt-2">click</button>

//     </div>

//   )
// }
// export default doc;
function doc() {
  const [val, setval] = useState({ name: "vishwas", isbanned: false });
  return (
    <div>
        <h1>{val}</h1>
        <button onClick={()=>setval({...val,isbanned:!val.isbanned})} className="px-2 py-1 text-white bg-blue-500 text-xs rounded-full mt-2">change</button>
    </div>
  )
}

// props use hote hai appke componenets ko reuseable bannane ke ;iye , consider karo apke paas ek button hai and apko us button ko alag alag jagah daalna hai app mein to app ek button componenet banaye  and uska data hard coded karne ki jagah parent componenet se send karde and child component par use kar le
