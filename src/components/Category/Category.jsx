import React from "react";
import "./Category.css";
import {Link} from "react-router-dom"
import CategoryGoods from "../../Pages/CategoryGoods";

const Category=({category,addToBasket})=>{
    
return (
    <div className="category">
        {/* {console.log(category)} */}
        <img className="Category" src={category.strCategoryThumb}/>
        <h3 className="categoryName">{category.strCategory+" "}{category.idCategory}</h3>
        <p>{category.strCategoryDescription}</p>
        <Link className="CategoryLink" to={"/categoryGoods/"+category.strCategory}   state={{ from: addToBasket }}>To{" "+category.strCategory}</Link>   
    </div>
)
}
export default Category
