import react, { useEffect } from "react";
const Services = ()=>{
    useEffect(()=>{
        console.log("componenet is created");

        return ()=>{
            console.log("component is deleted");
        }
    })
    return(
        <div><h1>services</h1></div>
    );
};
export default Services;