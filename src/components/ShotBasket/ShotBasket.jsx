import React from "react";
import {FaShoppingBasket} from 'react-icons/fa';

import "./ShotBasket.css";

const ShotBasket=({basketMenu,filtreBasket,shots})=>{
    console.log(basketMenu)
    return (
        <div className="ShotBasket">
            <div className="basketShots" key={Math.random()*10000}>
            <h3 className="bag"><FaShoppingBasket/></h3>
                        <span className="span" key={new Date()}>{basketMenu.length}</span>
                        <span key={new Date()+1}>{shots}dram</span>
                       
                    </div>
           {basketMenu.map((good)=>{
            return (
                <div className="Shot" key={Math.random()*10000}>
                    
                    <div className="good" key={good.id}>
                    <li key={new Date()} className="li">{good.name}</li>
                    <button onClick={(e)=>{e.preventDefault();filtreBasket(good.id)}}>x</button>
                </div>
                </div>
            )
           })}
        </div>
    )
}

export default ShotBasket