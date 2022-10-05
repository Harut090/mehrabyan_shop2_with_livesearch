import React from "react";
import "./Home.css";
import Form from "../Form";
import { getAllCategories, getFiltredCategories, getCategoryById} from "../../api";
import Category from "../../components/Category";
import { useState,useEffect } from "react";

const Home=()=>{
    const [allCategories,setAllCategories]=useState([]);
    const [sortCategories,setSortCategories]=useState([]);

    useEffect(()=>{
        getAllCategories().then(date=>{
            setAllCategories(date.categories);
        })
    },[])
   // console.log(allCategories)
   const fil=(str)=>{
   setSortCategories(allCategories.filter(item=>item.strCategory.toLowerCase().includes(str.toLowerCase())))
   }
   console.log(sortCategories)
    return (
        <div className="homePage">
            <Form fil={fil} />
            {sortCategories.length>0?sortCategories.map(category=>{
                return (<Category category={category}  key={category.idCategory}/>)
            }):allCategories.map(category =>{
                return (<Category category={category}  key={category.idCategory}/>)
            })}
           
        </div>
    )
}
export default Home;