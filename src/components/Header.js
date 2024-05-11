import { Logo_URL } from "../utils/constants";
import {useState} from "react";

const Header = () => {
    const [btnName,setbtnNameReact] = useState("login");
    console.log("Header render");
    return(
        <div className ="header"  >
           <div className = "logo-container" >
            <img className='logo'  src = {Logo_URL}/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login"
                           onClick={() => {
                              btnName === "login" ?
                              setbtnNameReact("logout"):
                              setbtnNameReact("login");
                            console.log(btnName);

                           }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;