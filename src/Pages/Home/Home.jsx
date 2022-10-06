import React from "react";
import "./Home.css";
import Form from "../Form";
import Form2 from "../Form2"
import { getAllCategories, getFiltredCategories, getCategoryById} from "../../api";
import Category from "../../components/Category";
import { useState,useEffect } from "react";
import CategoryList from "../../components/CategoryList"

const Home=()=>{
    const [allCategories,setAllCategories]=useState([]);
    const [sortCategories,setSortCategories]=useState([]);
    const [val,setVal]=useState("");

    useEffect(()=>{
        getAllCategories().then(date=>{
            setAllCategories(date.categories);
        })
    },[])

    //function for livesearch
   // console.log(allCategories)
//    const fil=(str)=>{
//    setSortCategories(allCategories.filter(item=>item.strCategory.toLowerCase().includes(str.toLowerCase())))
//    }

const search=(input,string)=>{
    setVal(input);
    setSortCategories(allCategories.filter(item=>item[string].toLowerCase().includes(input.toLowerCase())))
        //console.log(input, string)
}


   console.log(sortCategories);
   console.log(val)
    return (
        <div className="homePage">
            {/* <Form fil={fil}/> */}
         <Form2   search={search}/>
         <CategoryList categoryList={sortCategories.length>0?sortCategories:sortCategories.length<1 && val.length>0?"We can't halp you to show something":allCategories}/>
           
        </div>
    )
}
export default Home;


// {sortCategories.length>0?sortCategories.map(category=>{
//     return (<Category category={category}  key={category.idCategory}/>)
// }):sortCategories.length<1 && val.length>0?"We can't halp you to show something":allCategories.map(category=>{
//     return (<Category category={category} key={category.idCategory}/>)
// })}