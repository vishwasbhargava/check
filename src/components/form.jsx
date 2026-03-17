// import React, { useState } from "react";
// function Form (){
//     const [val,setval] = useState({name:"",email:"",age:""});
//     const handleClick = (event)=>{event.preventDefault();
//         console.log(val);
//     }
//     return(
//         <form action="" onSubmit={handleClick}>
//             <input onChange={(del)=>setval({...val,name:del.target.value})} type="text" placeholder="name" />
//             <input onChange={(del)=>setval({...val,email:del.target.value})}  type="text" placeholder="email" />
//             <input onChange={(del)=>setval({...val,age:del.target.value})}  type="text" placeholder="age" />
//             <input type="submit" />
//         </form>
//     )
// }
// export default Form;
import react from "react";
import { useForm } from "react-hook-form";

function Form({handleFormSubmitData}){
   const {register,handleSubmit} = useForm()
    return(
        <div className="mt-10 flex justify-center gap-10">
           <form className="flex gap-10" onSubmit={handleSubmit(data=> handleFormSubmitData(data) )} >
            <input {...register('name')} className="rounded-md px-2 py-1 text-base font-semibold outline-none " type="text" placeholder="name" />
            <input {...register('email')} className="rounded-md px-2 py-1 text-base font-semibold outline-none "  type="text" placeholder="email" />
            <input  {...register('image')} className="rounded-md px-2 py-1 text-base font-semibold outline-none "  type="text" placeholder="image" />
            <input className="rounded-md px-2 py-1 bg-blue-500 text-white font-semibold~" type="submit" />
           </form>
        </div>
    )
}
export default Form;