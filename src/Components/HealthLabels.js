import React from "react";

const HealthLabels = ({ recipes }) => {
  return (
    <ul>
      {recipes[0].recipe.healthLabels.map((label, i) => {
        return <li key={i}> {label} </li>;
      })}
    </ul>
  );
};

export default HealthLabels;
