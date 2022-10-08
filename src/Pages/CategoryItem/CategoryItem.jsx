import React, { useContext } from "react";
import {useState,useEffect} from "react"
import "./CategoryItem.css";
import {getCategoryById} from "../../api";
import {useParams,Link,useNavigate} from "react-router-dom";

const CategoryItem=({item,addToBasket,basketMenu})=>{
    const navigate=useNavigate()
    let matchItem=basketMenu.findIndex((good)=>{return good.id===item.idMeal});
   
    

    return (
        <div className="categoryItem" onClick={(e)=>{e.preventDefault(); addToBasket({id:item.idMeal,name:item.strMeal,count:1,price:Math.round(item.idMeal/100)})}}>
        <h3>{item.strMeal}</h3>
        <img src={item.strMealThumb} className={matchItem>0?"img":""}/>
        <div className="categoryItemLinks"> <Link to={"/item/"+item.idMeal}>To uniqe good</Link>
        <button onClick={()=>{navigate(-1)}}>go back</button>
        </div>
        </div>
    )
}
export default CategoryItem
