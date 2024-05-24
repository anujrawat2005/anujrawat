import { Logo_URL } from "../utils/constants";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact,setbtnNameReact] = useState("login");
    console.log("Header render");
      
    //if there is no dependancy array= useEffect is call on every render
    //
    useEffect(() => {
        console.log("useEffect render");
    },);





    return(
        <div className ="header"  >
           <div className = "logo-container" >
            <img className='logo'  src = {Logo_URL}/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about" >About us
                        </Link>                        
                        </li>
                    <li><Link to="/contact" >Contact us</Link> </li>
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
