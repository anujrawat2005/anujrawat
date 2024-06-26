import React ,{Suspense, lazy}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntsMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Login from "./components/Login";
//import Grocery from "./components/Grocery";

const Grocery= lazy( () => import("./components/Grocery"));





const Applayout = () =>{
    return (<div className="app">
        <Header/>
        <Outlet/>
        
        
    </div>)
};



const appRouter =  createBrowserRouter([
    {
        path:"/",
        element:<Applayout />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:   "/restraunts/:resId",
                element:<RestrauntMenu />,
            },
            {
                path: "/grocery",
                element:( <Suspense fallback= {<h1>Loading...</h1>}><Grocery/>
                </Suspense>),
                
                

            },
            {
                path:"/login",
                element:<Login/>,
            },
        ],
        errorElement:<Error/>,
    }
    

]);




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider  router = {appRouter}/>);
