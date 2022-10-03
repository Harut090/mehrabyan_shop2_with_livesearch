import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header =()=>{
    return(
        <div className="Header">
            <Link to="/"><span>H</span>ome</Link>
            <Link to="/about"><span>A</span>bout</Link>
            <Link to="/contact"><span>C</span>ontact</Link>
        </div>
    )
}

export default Header


