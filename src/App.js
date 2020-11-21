import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import SingleRecipe from "./Components/SingleRecipe"
import "./App.css";
import Navbar from "./Components/Navbar";
import RecipesDisplay from "./Components/RecipesDisplay";
import Search from "./Components/Search";
import SelectButtons from "./Components/SelectButtons";

function App() {
  const APP_ID = "b7209b0e";
  const APP_KEY = "4e8a7cb90bde763a0a9c11098a3a4123";
  const [recipes, setRecipes] = useState([]);
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

  const changeSelect = (newSelection) => {
    setQuery(newSelection)
  }

  const changeSearch = (newSelection) => {
    setQuery(newSelection)
  }

  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Search changeSearch={changeSearch}/>
          <SelectButtons  changeSelect={changeSelect} />
          <RecipesDisplay recipes={recipes}/>
        </Route>
        <Route exact path="/select">
          <SingleRecipe recipes={recipes}/>
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
