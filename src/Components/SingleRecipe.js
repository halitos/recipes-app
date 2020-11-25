import React from 'react'
import HealthLabels from "./HealthLabels"
import "./singleRecipe.css"


const SingleRecipe = ({recipes}) => {
    return (
        <div className="single-recipe">
          <div className="box1">
            <h3>{recipes[0].recipe.label}</h3>
            <p>Calories: {Math.round(recipes[0].recipe.calories)}</p>
            <img src={recipes[0].recipe.image} alt="dish" />
          </div>
          <div className="box2">
          <h4>Health Labels:</h4>
          <HealthLabels recipes={recipes}/>
          <h4>ingredients:</h4>
            <ul>
              {recipes[0].recipe.ingredients.map((i, index) => (
                <li key={index}>{i.text}</li>
              ))}
            </ul>
          </div>
      </div>
    )
}


export default SingleRecipe;