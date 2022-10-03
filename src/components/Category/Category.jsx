import React from "react";
import "./Category.css";
import {Link} from "react-router-dom"
import CategoryGoods from "../../Pages/CategoryGoods";

const Category=({category})=>{
return (
    <div className="category">
        <img className="Category" src={category.strCategoryThumb}/>
        <h3 className="categoryName">{category.strCategory+" "}{category.idCategory}</h3>
        <p>{category.strCategoryDescription}</p>
        <Link className="CategoryLink" to={"/categoryGoods/"+category.strCategory}>To{" "+category.strCategory}</Link>
       
    </div>
)
}

export default Category


// idCategory
// : 
// "1"
// strCategory
// : 
// "Beef"
// strCategoryDescription
// : 
// "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
// strCategoryThumb
// : 
// "https://www.themealdb.com/images/category/beef.png"