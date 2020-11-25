import React from "react";
import { Link } from "react-router-dom";
import style from "./recipe.module.css";

const Recipes = ({ label, calories, image }) => {
  return (
    <Link to="/select">
      <div className={style.recipe}>   
        <h3>{label}</h3>      
        <p>Calories: {Math.round(calories)}</p>
        <img src={image} alt="dish" />
      </div>
      </Link>
  );
};

export default Recipes;
