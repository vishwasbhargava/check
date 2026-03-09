import react from "react";
function Card(){
    const data =[
        {image:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:"amazon",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",instock:true},
        {image:'https://media.istockphoto.com/id/1214982859/photo/many-colorful-toothbrushes-on-pink-background-top-view.jpg?s=1024x1024&w=is&k=20&c=qY0KfzwMc9zmwcN3Vdi7W2RPGOSQC5Gg2t3z_cLU6Dc=',name:"daily object",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",instock:false},
        {image:'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:"apple",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",instock:false}
    ]

    return(
        <div  className='w-full h-screen flex item-center justify-center gap-10 bg-zinc-200'>
            {data.map((elem,index)=>(
                 <div key={index} className=  'w-52 bg-zinc-100  rounded-md overflow-hidden'>
            <div className='w-full h-32 bg-zinc-300'>
                <img className="w-full h-full object-cover" src={elem.image} alt="" />
            </div>
            <div className="w-full px-3 py-4">
                <h2 className=" font-semibold">{elem.name}</h2>
                <p className=" text-xs mt-5">{elem.description}</p>
                <button className= {`px-4 py-1 ${elem.instock ? "bg-blue-600":"bg-red-600"} rounded mt-3 text-zinc-100  text-xs`}></button>
            </div>
            </div>

            ))}
           
        </div>
    );
}
export default Card;