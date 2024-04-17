import Restrauntcard from "./Restrauntcard";
import { useState } from "react";
import reslist from "../utils/mockdata";



const Body = () => { 
    

const [listofrestraunts,setlistofrestraunts]= useState(reslist);
   













      
   
         return (
     <div className= "Body">
        <div className = "filter">
         <button className="filter-btn" 
         onClick={() =>{
            const filteredList = listofrestraunts.filter(
            (res) =>
            res.data.avgrating>4);
            setlistofrestraunts(filteredList);
            
            
         }}
         >Top rated restaurants
         </button>
        </div>
        <div className = "restraunt-container">
           {listofrestraunts.map((Restraunt,index) => (
            <Restrauntcard key={index} resdata ={Restraunt} />
           ))}
          </div>
       </div>
    )
};
export default Body;