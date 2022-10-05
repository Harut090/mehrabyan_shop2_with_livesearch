import React from "react";
import "./Form.css";
import { useState } from "react";

const Form=({fil})=>{
    const Change=(e)=>{
        e.preventDefault();
        fil(e.target.value);
    }
   
return (
    <div className="form">
        <input type="text"  onChange={Change} placeholder="Search you preffered meals"  />
    </div>
)
}

export default Form;