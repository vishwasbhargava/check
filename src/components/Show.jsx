// import react from "react";
import axios from "axios";
import react, { useState } from "react"
const Show= ()=>{
     const[product,setProduct]=useState([]);
     const[loading,setLoadoading]= useState(false);

    // setProduct(product.data);
    const getProduct =()=>{
        const api='https://fakestoreapi.com/products';
        setLoadoading(true);
        axios.get(api).then(res=>{ 
             console.log(res.data);
             setProduct(res.data);
            
            } ).catch(err=>{console.log(err)}).finally(()=>{
                setLoadoading(false);
            });
 
    };
 const addProduct =()=>{
        const api='https://fakestoreapi.com/products';
        axios.post(api,{
             "title": "BMW Pencil",
  "price": 10,
  "description": "A description of the new product.",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
        }).then(res=>{ 
             console.log(res);} ).catch(err=>{console.log(err)});
 
    };
    return(
         <div className="container pl-2">
            <button onClick={getProduct} className="px-5 py-2 text-zinc-200 bg-red-300 rounded mt-10 hover:bg-red-600">get api</button>
            <br />
            <button onClick={addProduct} className="px-5 py-2 bg-red-300 text-zinc-300 rounded mt-10 hover:bg-red-600">save new product</button>
            <div className="mt-10">
                {loading ?( <h1>...loading</h1>):product.length===0 ?(<h1>no product found</h1>):<ul>
                    (product.map((p)=>{<li key={p.id} className="p-3 bg-red-300 rounded mb-2 w-1/4">{p.title}</li>}))}  </ul>
          
        </div>
        </div>

    )
}
export default Show;