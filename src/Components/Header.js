import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="my-logo">
                <button>My Logo/Home</button>
            </div>
            <h1>Awesome Recepies</h1>
            <div id="edamam-badge" ></div>
        </div>
    )
}
