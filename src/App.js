import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Recipes from "./Components/Recipes";
import SelectButtons from "./Components/SelectButtons";

function App() {
  const APP_ID = "b7209b0e";
  const APP_KEY = "4e8a7cb90bde763a0a9c11098a3a4123";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("patlican");

  useEffect(() => {

    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) =>{
        setRecipes(data.hits);
      })
  }, [query]);

  function updateSearch(e) {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const changeSelect = (newSelection) => {
    setQuery(newSelection)
  }

  return (
    <div className="App">
    <Header/>
      <div>
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
      </div>
      <SelectButtons  changeSelect={changeSelect} />
      <div className="recipes">
        {recipes.map((r, index) => (
          <Recipes
            key={index}
            {...r.recipe}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
