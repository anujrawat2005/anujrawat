/**
 * 
 * Header
 * -logo
 * -nav Items
 * Body
 * -search
 * -restrauntcontainer
 * -restraunt card
 *  -img
 *  -name of restraunt,star rating,delivery-time
 * Footer
 * -copyright
 * -links
 * -address
 * -contact
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

const head={
    background:"green"
}
const Header = () => {
    return(
        <div className ="header" style={head} >
           <div className = "logo-container" >
            <img className='logo' src=" https://www.healthifyme.com/blog/wp-content/uploads/2022/01/Junk-Food-More-Harm-and-Lesser-Well-being.jpeg  "/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const anuj= {
    backgroundColor: "red"
}






const Restrauntcard = (props) => {
    const{resdata} =props;
    const{name,cloudinaryimageid,avgrating,costfortwo,deliverytime,cuisines
    }=resdata?.data;
   
    return(
        <div className="restraunt-card"  style={anuj} > 
         <img className="restraunt-logo" 
         alt ="restraunt-logo" 
         src= " https://cdn4.singleinterface.com/files/banner_images/34404/952_1624955497_wednesdaybucketmin.jpg  "
         />
          <h1>{name}</h1>
          <h2>{cuisines.join(",")}</h2>
          <h3>{avgrating}</h3>
          <h4>{costfortwo }</h4>
          <h5>{deliverytime} minutes</h5>
        </div>
    );
};


const reslist =  [ {
    data :  {
        name:"KFC",
        cuisines :   ["Burgers" ,"chicken" ,"pepsi"] ,
        avgrating:"4.4",
        cloudinaryimageid:" https://cdn4.singleinterface.com/files/banner_images/34404/952_1624955497_wednesdaybucketmin.jpg ",
        costfortwo:"400 for two ",
        deliverytime:"35"
} }, { data:{
    name:"Dominos",
   cuisines :   ["Macpuffs" ,"Pizza" ,"pepsi"] ,
   avgrating:"4.9",
   cloudinaryimageid:"https://nextgalleriamalls.com/galleriapunjagutta/wp-content/uploads/2024/02/Dominos-logo.png ",
   avgrating:"4.9",
   costfortwo:"500 for two ",
   deliverytime:"30"
}},{data :{
    name:"Kake da hotel",
   cuisines :   ["Dal makhani" ,"shahi panner" ,] ,
   avgrating:"3.9",
   cloudinaryimageid:"https://content.jdmagicbox.com/comp/delhi/e9/011pxx11.xx11.100131123028.c1e9/catalogue/chadha-bhojnalaya-model-town-1-delhi-north-indian-restaurants-t6rhavybw9.jpg ",
   costfortwo:"300 for two ",
   deliverytime:"30"
}
}
 


];





const Body = () => {
    return(
        <div className= "Body">
        <div className = "search">Search</div>
        <div className = "restraunt-container">
         {
            reslist.map((restraunt,index) => (
                <Restrauntcard  key ={index} resdata={restraunt} />
            ))}
        
        
         
         
        </div>
      </div>
    );
};


const Applayout = () =>{
    return <div className="app">
        <Header/>
        <Body />
        
        
    </div>
};
const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
