import  { CDN_URL } from "../utils/constants";

const Restrauntcard = (props) => {
    const {resdata}=props;
    const{ name,cloudinaryImageId,avgRatingString,costfortwo,deliveryTime,cuisines}=resdata?.info;
   
    return(
        <div className="restraunt-card"  style={{background:"#f0f0f0"}} > 
         <img className="restraunt-logo" 
         alt ="restraunt-logo" src={CDN_URL+cloudinaryImageId}
         />
          <h1>{name}</h1>
          <h2>{cuisines.join(",")}</h2>
          <h3>{avgRatingString}</h3>
          <h4>{costfortwo}</h4>
          <h5>{deliveryTime} minutes</h5>
          
        </div>
    );
};

export  default Restrauntcard;


