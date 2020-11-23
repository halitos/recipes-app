import React from "react";
import { Link } from "react-router-dom";
import style from "./recipe.module.css";

const Recipes = ({ label, calories, image, ingredients }) => {
  return (
    <Link to="/select">
      <div className={style.recipe}>   
        <h3>{label}</h3>      
        <p>Calories: {Math.round(calories)}</p>
        <img src={image} alt="dish" />
        {/* <ul>
          {ingredients.map((i, index) => (
            <li key={index}>{i.text}</li>
          ))}
        </ul> */}
      </div>
      </Link>
  );
};

export default Recipes;
