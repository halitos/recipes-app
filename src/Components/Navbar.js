import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="header">
            <div className="my-logo">
            <Link to="/"><button>Logo/Home</button></Link>          
            </div>
            <h1>Awesome Recepies</h1>
            <div id="edamam-badge" ></div>
        </div>
    )
}
