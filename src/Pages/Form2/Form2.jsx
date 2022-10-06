import React from "react";
import "./Form2.css";
import { useState,useEffect } from "react";


const Form2=({search})=>{
    const [input,setInput]=useState("");
    const chang=(e)=>{
        e.preventDefault();
        setInput(e.target.value)
    }
   return (
    <form className="form2">

        <input type="text" className="form2" placeholder="Search meals" value={input}   onChange={chang}/>
   
         <button className="form2button" onClick={(e)=>{ e.preventDefault();search(input,"strCategory")}}>Search By Name</button>
    <button className="form2button" onClick={(e)=>{ e.preventDefault();search(input,"strCategoryDescription")}}>Search By Words</button>
    
   
</form>
   )
}
export default Form2

// idCategory
// : 
// "1"
// strCategory
// : 
// "Beef"
// strCategoryDescription
// : 