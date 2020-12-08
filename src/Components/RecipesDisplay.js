import React, { useState } from "react";
import Recipes from "./Recipes";
import SingleRecipe from "./SingleRecipe";

const RecipesDisplay = ({ recipes, setDisplaySingle }) => {
  const [showSingle, setShowSingle] = useState(false);
  const [recId, setRecId] = useState();

  return !showSingle ? (
    <div className="rec-wrapper">
      <h3 style={{ textAlign: "center", color: "lightGreen" }}>
        Select your favourite recepi to see details
      </h3>
      <div className="recipes">
        {recipes.map((r, index) => (
          <Recipes
            key={index}
            id={index}
            setShowSingle={setShowSingle}
            setDisplaySingle={setDisplaySingle}
            setRecId={setRecId}
            {...r.recipe}
          />
        ))}
      </div>
    </div>
  ) : (
    <SingleRecipe
      recipes={recipes}
      recId={recId}
      setShowSingle={setShowSingle}
      setDisplaySingle={setDisplaySingle}
    />
  );
};

export default RecipesDisplay;
