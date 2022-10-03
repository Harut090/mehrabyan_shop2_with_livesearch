import React from "react";
import {useParams,useNavigate} from "react-router-dom";
import "./GoodById.css";
import {getCategoryById} from "../../api";
import { useState,useEffect}  from "react";

const GoodById=()=>{
const navigate=useNavigate()
const [meal,setMeal]=useState([]);
const {id}=useParams();


useEffect(()=>{
getCategoryById(id).then(data=>{
    setMeal(data)
});
},[id])
let x=meal.url?meal.url.slice(8,25):"hello";
    return (
        <div className="goodById">
            <a href={"http://"+x} target="_blank">{x}</a>
            <button onClick={()=>{navigate(-1)}}>go back</button>
        </div>
    )
}
export default GoodById

// onClick={()=>{navigate(-1)}}

// "https://www.themealdb.com/api/json/v1/1//lookup.php?i=52877"
