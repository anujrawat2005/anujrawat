import { Logo_URL } from "../utils/constants";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlinestatus";
import useOnlineStatus from "../utils/useonlinestatus";
import Grocery from "./Grocery";

const Header = () => {
    const [btnNameReact,setbtnNameReact] = useState("login");

    const onlineStatus= useOnlineStatus();
 
      
 
   




    return(
        <div className ="header"  >
           <div className = "logo-container" >
            <img className='logo'  src = {Logo_URL}/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Online Status:{onlineStatus ? "yes":"no"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about" >About us
                        </Link>                        
                        </li>
                    <li><Link to="/contact" >Contact us</Link> </li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li><Link to ="/login">Login</Link></li>
                    <button className="login"
                           onClick={() => {
                              btnNameReact === "login" ?
                              setbtnNameReact("logout"):
                              setbtnNameReact("login");
                            console.log(btnNameReact);

                           }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
