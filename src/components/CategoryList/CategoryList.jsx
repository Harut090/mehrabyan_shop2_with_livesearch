import React from "react";
import "./CategoryList.css";
import Category from "../Category";
import {useState} from "react";

const CategoryList=({categoryList,addToBasket})=>{
    const [page,setPage]=useState([]);
    const [count,setCount]=useState(3);
    let pages=[];

    const showPage=(str)=>{
        let x=parseInt(str)*parseInt(count);
        setPage(categoryList.slice(x,x+parseInt(count)))
    }

    
    console.log(count)
    return(

         <div className="CategoryList">
            <div className="Categories" key={new Date()}>
           {/* {console.log(categoryList)} */}
           {page.length>0?page.map((category)=>{
            return (<Category category={category} key={category.idCategory}  addToBasket={addToBasket}/>)
           }):typeof categoryList==="object"?categoryList.map((category)=>{
            return (<Category category={category} key={category.idCategory} addToBasket={addToBasket}/>)
           }):categoryList}
        </div>
        <div className="pages" key={new Date()/5}>
           <div key={new Date()-3}>
           {typeof categoryList==="object"?pages=Array.from({length:Math.ceil(categoryList.length/count)},(el,index)=>{
               return(
                <button key={index} onClick={(e)=>showPage(index)}>{index+1}</button>
               )
            }):""}
           </div>
            <select className="select" key={new Date()}
             onChange={(e)=>{e.preventDefault();setCount(e.target.value)}}
             value={count}>
                <option value="3" key={new Date()/2}>3</option>
                <option value="4" key={new Date()/3}>4</option>
                <option value="7" key={new Date()/4}>7</option>
            </select>
          
           
            
        </div>
         </div>
    )
}
export default CategoryList;


