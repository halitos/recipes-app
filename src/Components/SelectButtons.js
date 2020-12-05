import React from 'react'
import "./selectBtn.css"

export default function SelectButtons( {changeSelect}) {


const selection1 = ["veggie", "rice", "pasta"]
const selection2 = [ "fish", "salad", "beef"]


const handleClick = (e) => {  
changeSelect(e.target.value)
}


return (
    <div className="btn-main">
        <div className="btn-container">
            {selection1.map((sel, index) =>{
            return <button key={index} className="select-btn" onClick={handleClick} type="text" value={sel}>{sel}</button>
            })}  
        </div>
        <div className="btn-container">
                {selection2.map((sel, index) =>{
                return <button key={index} className="select-btn" onClick={handleClick} type="text" value={sel}>{sel}</button>
                })}  
        </div>
    </div>

    )
}
