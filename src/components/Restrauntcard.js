import  { CDN_URL } from "../utils/constants";

const Restrauntcard = (props) => {
    const {resdata}=props;
    const{ name,cloudinaryimageid,avgrating,costfortwo,deliverytime,cuisines}=resdata?.data;
   
    return(
        <div className="restraunt-card"  style={{background:"#f0f0f0"}} > 
         <img className="restraunt-logo" 
         alt ="restraunt-logo" src={CDN_URL+cloudinaryimageid}
         />
          <h1>{name}</h1>
          <h2>{cuisines.join(",")}</h2>
          <h3>{avgrating}</h3>
          <h4>{costfortwo }</h4>
          <h5>{deliverytime} minutes</h5>
          
        </div>
    );
};

export  default Restrauntcard;


