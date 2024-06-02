import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";





const RestrauntMenu = () => {

    
   const { resId }=useParams();


   const resInfo = useRestaurantMenu(resId);
   


  


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
    