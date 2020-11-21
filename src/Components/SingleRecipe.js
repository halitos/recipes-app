import React from 'react'

const SingleRecipe = ({recipes}) => {
    console.log(recipes[0].recipe.label);
    return (
        <div>
        <h3>{recipes[0].recipe.label}</h3>
        <p>Calories: {Math.round(recipes[0].recipe.calories)}</p>
      </div>
    )
}


export default SingleRecipe;