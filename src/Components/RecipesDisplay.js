import React from 'react'
import Recipes from "./Recipes"

const RecipesDisplay = ({recipes}) => {
    return (
        <div className="recipes">
        {recipes.map((r, index) => (
          <Recipes
            key={index}
            id={index}
            {...r.recipe}
          />
        ))}
      </div>
    )
}

export default RecipesDisplay;
