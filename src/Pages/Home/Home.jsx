import React  from "react";
import "./Home.css";
import Form from "../Form";
import Form2 from "../Form2"
import { getAllCategories, getFiltredCategories, getCategoryById } from "../../api";
import Category from "../../components/Category";
import { useState, useEffect } from "react";
import CategoryList from "../../components/CategoryList";

const Home = () => {
    const [allCategories, setAllCategories] = useState([]);
    const [sortCategories, setSortCategories] = useState([]);
    const [sortByLetters,setSortByLetters] = useState([]);
    const [val, setVal] = useState("");
    useEffect(() => {
        getAllCategories().then(date => {
            setAllCategories(date.categories);
        })
    }, []);

   console.log(allCategories)

   const toSortCategories =(array)=>{
    setSortByLetters(array.sort((a,b)=>{
        return(a.strCategory.toLowerCase()>b.strCategory.toLowerCase()?-1:a.strCategory.toLowerCase()<b.strCategory.toLowerCase()?1:0)
     }))
   }

    const search = (input, string) => {
        setVal(input);
        setSortCategories(allCategories.filter(item => item[string].toLowerCase().includes(input.toLowerCase())))
    }
    return (
        <div className="homePage">
             <button className="sort" onClick={(e)=>{e.preventDefault();toSortCategories(sortCategories.length>0?sortCategories:allCategories)}}>sort</button>
            {/* <Form fil={fil}/> */}
            <Form2 search={search} />
            
            <CategoryList categoryList={sortByLetters.length>0?sortByLetters: sortCategories.length > 0 ? sortCategories : sortCategories.length < 1 && val.length > 0 ? "We can't halp you to show something" : allCategories} />  
        </div>
    )
}
export default Home;
