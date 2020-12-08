import React from "react";
import style from "./recipe.module.css";

const Recipes = ({
  label,
  calories,
  image,
  id,
  setShowSingle,
  setRecId,
  setDisplaySingle,
}) => {
  const setSingle = () => {
    setShowSingle(true);
    setRecId(id);
    setDisplaySingle(true);
  };

  return (
    <div className={style.recipe} onClick={setSingle}>
      <h3>{label}</h3>
      <p>Calories: {Math.round(calories)}</p>
      <img src={image} alt="dish" />
    </div>
  );
};

export default Recipes;
