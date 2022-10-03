import React from "react";
import "./Home.css";
import { getAllCategories, getFiltredCategories, getCategoryById} from "../../api";
import Category from "../../components/Category";
import { useState,useEffect } from "react";

const Home=()=>{
    const [allCategories,setAllCategories]=useState([]);

    useEffect(()=>{
        getAllCategories().then(date=>{
            setAllCategories(date.categories);
        })
    },[])
   // console.log(allCategories)
   
    return (
        <div className="homePage">
            {allCategories.map((category)=>{
                console.log(category)
                return <Category category={category} key={category.idCategory}/>
            })}
           
        </div>
    )
}
export default Home;