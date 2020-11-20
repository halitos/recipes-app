import React, {useState} from 'react'
import "./selectBtn.css"

export default function SelectButtons( {changeSelect}) {
const [selectedFood, setSelectedFood] = useState("")

const selection1 = ["veggie", "rice", "banana"]
const selection2 = [ "beef", "lamb", "chicken"]

const handleClick = (e) => {
setSelectedFood(e.target.value)  
changeSelect(e.target.value)
console.log(selectedFood);
}


return (
    <div className="btn-container">
        <div className="btn-box1">
            {selection1.map((sel, index) =>{
            return <button key={index} className="select-btn" onClick={handleClick} type="text" value={sel}>{sel}</button>
            })}  
        </div>
        <div className="btn-box2">
            {selection2.map((sel, index) =>{
            return <button key={index} className="select-btn" onClick={handleClick} type="text" value={sel}>{sel}</button>
            })}  
        </div>
    </div>

    )
}
