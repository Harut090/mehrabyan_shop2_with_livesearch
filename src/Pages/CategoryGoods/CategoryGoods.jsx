import React from "react";
import { useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import { getFiltredCategories} from "../../api"
import ShotBasket from "../../components/ShotBasket"
import CategoryItem from "../CategoryItem";
import "./CategoryGoods.css"
import Form from "../Form";


const CategoryGoods=()=>{
    const {name}=useParams();
    const [useCategory,setUseCategory] = useState([]);
    const [filtredItems,setFiltredItems]=useState([]);
    const [basketMenu, setBasketMenu] = useState([]);

    useEffect(()=>{
        getFiltredCategories(name).then(data=>{
            setUseCategory(data.meals);
           // console.log(data.meals)
        })
    },[name])

    const addToBasket = (good) => {
        const index=basketMenu.findIndex((item)=>{
          return  item.id==good.id
        });
        if (index<0) {
            setBasketMenu([...basketMenu,good]);    
        }

        else{
            const basket=basketMenu.map((item)=>{
                
                if (item.id===good.id) {
                    item= {...item,count:item.count+1};
                    return item;
                }
                else{
                    return item;  
                } 
            })
            setBasketMenu(basket);
        } 
    }
    let shots=0;

    basketMenu.map((item)=>{
        shots+=item.price*item.count;
    })
    
    const filtreBasket=(id)=>{
        const basket=basketMenu.filter((good)=>{
            return good.id!==id
        })
        setBasketMenu(basket)
    }

    const fil=(str)=>{
        setFiltredItems(useCategory.filter(item=>{
            return item.strMeal.toLowerCase().includes(str.toLowerCase());
        }))
    }
    
    return (
        <div className="categoryPage">
            <Form  fil={fil}/>
            <div className="category-goods">
            {filtredItems.length>0?filtredItems.map(item=>{
               return (<CategoryItem item={item} key={item.idMeal}  addToBasket={addToBasket} basketMenu={basketMenu}/>)
            }):useCategory.map(item=>{
                return (
                    <CategoryItem  item={item} key={item.idMeal}  addToBasket={addToBasket} basketMenu={basketMenu}/>
                )
            })}
            </div>
            <ShotBasket className="ShotBasket" basketMenu={basketMenu} filtreBasket={filtreBasket} shots={shots} />
        </div>
    )
}
export default CategoryGoods

