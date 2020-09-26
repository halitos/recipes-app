import React, { useState, useEffect } from "react";
import "./App.css";
import Recipes from "./Recipes";

function App() {
  const APP_ID = "b7209b0e";
  const APP_KEY = "4e8a7cb90bde763a0a9c11098a3a4123";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    // getRecipes();

    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data.hits));
  }, [query]);

  // const getRecipes = async () => {
  //   const response = await fetch(
  //     `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  //   );
  //   const data = await response.json();
  //   setRecipes(data.hits);
  // }

  function updateSearch(e) {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search} // works wo this
          onChange={updateSearch}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((r, index) => (
          <Recipes
            key={index}
            title={r.recipe.label}
            calories={r.recipe.calories}
            image={r.recipe.image}
            ingredients={r.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
