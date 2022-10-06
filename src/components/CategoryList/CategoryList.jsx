import React from "react";
import "./CategoryList.css";
import Category from "../Category";
import {useState} from "react";

const CategoryList=({categoryList})=>{
    const [page,setPage]=useState([]);
    let count=3;
    let pages=[];

    const showPage=(str)=>{
        console.log(str);
        let x=str*count;
        console.log(x);
        setPage(categoryList.slice(x,x+count))
    }

    console.log(page)
    return(

         <div>
            <div className="Categories">
           {/* {console.log(categoryList)} */}
           {page.length>0?page.map((category)=>{
            return (<Category category={category} key={category.idCategory}/>)
           }):typeof categoryList==="object"?categoryList.map((category)=>{
            return (<Category category={category} key={category.idCategory}/>)
           }):categoryList}
        </div>
        <div className="pages">
            {typeof categoryList==="object"?pages=Array.from({length:Math.ceil(categoryList.length/count)},(el,index)=>{
               return(
                <button key={index} onClick={(e)=>showPage(index)}>{index+1}</button>
               )
            }):""}
         { console.log(pages)}
          
           
            
        </div>
         </div>
    )
}
export default CategoryList;


