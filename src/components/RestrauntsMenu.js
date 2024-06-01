import {  useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";




const RestrauntMenu = () => {

    const[resInfo,setresInfo] = useState(null);
   const { resId }=useParams();
   


   useEffect(() => {
        fetchMenu();
    },[]);

   const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);

    
    const json = await data.json()

    console.log(json)
    setresInfo(json.data);

    

  
   };


   if( resInfo === null) return<Shimmer/>


    const  {name,cuisines,costForTwoMessage} = resInfo?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[0]?.card?.card?.info;  

    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines .join(",")}-{costForTwoMessage}
            </p>

            <h2>Menu</h2>
            <ul>
                <li>Chicken</li>
                <li>Burgers</li>
                <li>Pepsi</li>
            </ul>
        </div>
    );
};

export default RestrauntMenu;
    