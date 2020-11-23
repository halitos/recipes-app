import React from 'react'
import "./selectBtn.css"

export default function SelectButtons( {changeSelect}) {


const selection = ["veggie", "rice", "beef", "fish"]

const handleClick = (e) => {  
changeSelect(e.target.value)
}


return (
    <div className="btn-container">
            {selection.map((sel, index) =>{
            return <button key={index} className="select-btn" onClick={handleClick} type="text" value={sel}>{sel}</button>
            })}  
    </div>
    )
}
