import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getFiltredCategories} from "../../api"
import CategoryItem from "../CategoryItem";
import "./CategoryGoods.css"
import Form from "../Form";
const CategoryGoods=()=>{
    const {name}=useParams();
    const [useCategory,setUseCategory] = useState([]);
    const [filtredItems,setFiltredItems]=useState([]);
    useEffect(()=>{
        getFiltredCategories(name).then(data=>{
            setUseCategory(data.meals);
           // console.log(data.meals)
        })
    },[name])

    const fil=(str)=>{
        setFiltredItems(useCategory.filter(item=>{
            return item.strMeal.toLowerCase().includes(str.toLowerCase());
        }))
    }
    console.log(filtredItems)
    

    //console.log(name)
    return (
        <div className="category-goods">
            <Form  fil={fil}/>
            {filtredItems.length>0?filtredItems.map(item=>{
               return (<CategoryItem item={item} key={item.idMeal}/>)
            }):useCategory.map(item=>{
                return (
                    <CategoryItem  item={item} key={item.idMeal}/>
                )
            })}
        </div>
    )
}
export default CategoryGoods

