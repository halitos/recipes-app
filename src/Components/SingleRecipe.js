import React from "react";
import HealthLabels from "./HealthLabels";
import "./singleRecipe.css";
import { Home } from "@material-ui/icons";

const SingleRecipe = ({ recipes, recId, setShowSingle, setDisplaySingle }) => {
  const goBack = () => {
    setShowSingle(false);
    setDisplaySingle(false);
  };

  return (
    <>
      <button className="home-btn" onClick={goBack}>
        <Home />
      </button>
      <div className="single-recipe">
        <div className="box1">
          <h3>{recipes[recId].recipe.label}</h3>
          <p>Calories: {Math.round(recipes[recId].recipe.calories)}</p>
          <img src={recipes[recId].recipe.image} alt="dish" />
        </div>
        <div className="box2">
          <h4>Health Labels:</h4>
          <HealthLabels recipes={recipes} />
          <h4>ingredients:</h4>
          <ul>
            {recipes[recId].recipe.ingredients.map((i, index) => (
              <li key={index}>{i.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleRecipe;
