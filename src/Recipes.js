import React from "react";
import style from "./recipe.module.css";

const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>Calories: {Math.round(calories)}</p>
      <img src={image} alt="dish" />
      <ul>
        {ingredients.map((i, index) => (
          <li key={index}>{i.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
