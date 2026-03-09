import react from "react";
// function Card({text,color}){
//     return(
//         <button className={`px-3 py-2 ${color} text-white text-xs rounded-full m-2`}>{text}</button>
//     )
// }
function Card({values,handleClick}){
    const {name,profession,image}= values
    return(
        <div className="w-52 bg-white rounded-md overflow-hidden flex justify-center items-center">
            <div className=" w-full h-40 bg-sky-200">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className="w-full p-3">
                <h3 className="text-xl font-semibold">{name}</h3>
                <h5 className="text-xs">{profession}</h5>
                <button onClick={handleClick} className="mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-nd">Add friends</button>
            </div>
        </div>
    )
}
export default Card;