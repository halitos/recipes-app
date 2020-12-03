import React from "react";
import { Link } from "react-router-dom";
import style from "./recipe.module.css";

const Recipes = ({ label, calories, image, id }) => {
  return (
    <Link to="/select">
      <div className={style.recipe}>   
        <h3>{label}</h3>   
        <p>{id}</p>   
        <p>Calories: {Math.round(calories)}</p>
        <img src={image} alt="dish" />
      </div>
      </Link>
  );
};

export default Recipes;
