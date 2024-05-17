import Restrauntcard from "./Restrauntcard";
import {   useState , useEffect } from "react";
import reslist from "../utils/mockdata";
import Shimmer from "./Shimmer";


function Body() {

   //local state variable-superpowerful state variable
   const [listofRestraunts, setlistofRestraunts] = useState(reslist);
   const [filteredRestraunts, setfilteredRestraunts] = useState([]);

   const [searchText, setsearchText] = useState("");

   //whenever the state variable updates ,react triggered cycle (re-render the componenet)
   console.log("Body Rendered");

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

     

      

      setfilteredRestraunts(reslist);

   };

   return listofRestraunts.length === 0?   (<Shimmer />) :

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

                     const filteredRestraunts = listofRestraunts.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
                     );
                     setfilteredRestraunts(filteredRestraunts);






                  } }
                  >Search</button>
               </div>
               <button className="filter-btn"
                  onClick={() => {
                     const filteredList = listofRestraunts.filter(
                        (res) => res.data.avgrating > 4);
                     setlistofRestraunts(filteredList);


                  } }
               >Top rated restaurants
               </button>
            </div>
            <div className="restraunt-container">
               {filteredRestraunts.map((Restraunt, index) => (
                  <Restrauntcard key={index} resdata={Restraunt} />
               ))}
            </div>
         </div>
      );
}
export default Body;
