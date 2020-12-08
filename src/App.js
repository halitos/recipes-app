import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import RecipesDisplay from "./Components/RecipesDisplay";
import Search from "./Components/Search";
import SelectButtons from "./Components/SelectButtons";
import { APP_ID, APP_KEY } from "./credits.json";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("patlican");
  const [displaySingle, setDisplaySingle] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.hits);
        console.log(data.hits);
      });
  }, [query]);

  const changeSelect = (newSelection) => {
    setQuery(newSelection);
  };

  const changeSearch = (newSelection) => {
    setQuery(newSelection);
  };

  console.log(recipes);

  return (
    <div className="App">
      <Navbar />
      {!displaySingle && (
        <div className="main-sec">
          <SelectButtons changeSelect={changeSelect} />
          <Search changeSearch={changeSearch} />
        </div>
      )}
      <RecipesDisplay recipes={recipes} setDisplaySingle={setDisplaySingle} />
    </div>
  );
}

export default App;
