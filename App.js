/**
 * 
 * <div id="parent1"
 * 
 * <div id = "parent">
 * <div id = "child1">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * <div id = "child2".
 * <h1>I am h1 tag</h1>
 * <h2> I am h2 tag</h2>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement = object =render

const anuj =<a>anuj rawat03022005</a>

const title =  (
    <h1 className = "head" tabIndex="5">
       {anuj}
       anuj rawat using jsx
       </h1>
)
;


// writing java script in jsx
const HeadingComponent = () =>  (
    <div id = "rawat">
     {title}
        <h1 className = "heading" tabIndex="4">anuj rawat functional component</h1>
 </div>
);

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
