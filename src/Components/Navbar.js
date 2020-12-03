import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"
import { Home } from "@material-ui/icons";

export default function Navbar() {
    return (
        <div className="header">
            <Link to="/">      
            <button><Home/></button>         
            </Link>
            <h1>Awesome Recepies</h1>
            <div id="edamam-badge" ></div>
        </div>
    )
}
