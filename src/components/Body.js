import Restrauntcard from "./Restrauntcard";
import {   useState , useEffect } from "react";
import useOnlineStatus from "../utils/useonlinestatus";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";



function Body() {   

   //local state variable-superpowerful state variabless
   const [listofRestraunts, setlistofRestraunts] = useState([]);
   const [filteredRestraunts, setfilteredRestraunts] = useState([]);

   const [searchText, setsearchText] = useState("");

   //whenever the state variable updates ,react triggered cycle (re-render the component)
   console.log("Body Rendered");

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      

      const json = await data.json();
      console.log(json);

      

      setlistofRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setfilteredRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

   };

   const onlineStatus= useOnlineStatus();
   if( onlineStatus=== false)
      return(
   <h1>Looks like you are offline,Please check your internet connection</h1>
      );


   return listofRestraunts.length === 0 ? 
     <Shimmer /> :

      (
         <div className="Body">
            <div className="filter">
               <div className="search">
                  <input type="text" className="search box" value={searchText}
                     onChange={(e) => {
                        setsearchText(e.target.value);
                      } } />
                  <button onClick={() => {
                     console.log(searchText);

                     const filteredRestraunts = listofRestraunts.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                     );
                     setfilteredRestraunts(filteredRestraunts);







                  } }
                  >Search</button>
               </div>
               <button className="filter-btn"
                  onClick={() => {
                     const filteredList = listofRestraunts.filter(
                        (res) => res.info.avgRatingString > 4.5);
                     setlistofRestraunts(filteredList);


                  } }
               >Top rated restaurants
               </button>
            </div>
            <div className="restraunt-container">
               {filteredRestraunts.map((restraunt) => (
                  <Link
                  key={restraunt.info.id}
                  to={"/restaurants/"+restraunt.info.id} >
                  
                  <Restrauntcard key={restraunt.info.id} resdata={restraunt} /> </Link>
               ))}
            </div>
         </div>
      );
}
export default Body;
