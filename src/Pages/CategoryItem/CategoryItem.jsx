import React from "react";
import {useState,useEffect} from "react"
import "./CategoryItem.css";
import {getCategoryById} from "../../api";
import {useParams,Link,useNavigate} from "react-router-dom";

const CategoryItem=({item})=>{
    const navigate=useNavigate()

    return (
        <div className="categoryItem">
        <h3>{item.strMeal}</h3>
        <img src={item.strMealThumb}/>
        <div className="categoryItemLinks"> <Link to={"/item/"+item.idMeal}>To uniqe good</Link>
        <button onClick={()=>{navigate(-1)}}>go back</button>
        </div>
       
        </div>
    )
}
export default CategoryItem


// idMeal
//     : 
//     "52916"
//     strMeal
//     : 
//     "Pear Tarte Tatin"
//     strMealThumb
//     : 
//     "https://www.themealdb.com/images/media/meals/rxvxrr1511797671.jpg"