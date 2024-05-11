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
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      const json = await data.json();

      console.log(json);


      setfilteredRestraunts(reslist);

   };

   return listofRestraunts.length === 0 ? (<Shimmer />) :

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
