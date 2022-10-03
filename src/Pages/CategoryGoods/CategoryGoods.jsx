import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getFiltredCategories} from "../../api"
import CategoryItem from "../CategoryItem";
import "./CategoryGoods.css"
const CategoryGoods=()=>{
    const {name}=useParams();
    const [useCategory,setUseCategory] = useState([]);
    useEffect(()=>{
        getFiltredCategories(name).then(data=>{
            setUseCategory(data.meals);
           // console.log(data.meals)
        })
    },[name])

    

    //console.log(name)
    return (
        <div className="category-goods">
            {useCategory.map(item=>{
                console.log(item)
                return (
                    <CategoryItem  item={item} key={item.idMeal}/>
                )
            })}
            hello categories
        </div>
    )
}
export default CategoryGoods