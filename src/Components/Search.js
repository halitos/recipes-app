import React, { useState } from "react";
import * as css from "./search.module.css";

const Search = ({ changeSearch }) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  function updateSearch(e) {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    if (!search) {
      alert("Please enter a value to search");
    } else {
      setQuery(search);
      console.log(query);
      changeSearch(search);
      setSearch("");
    }
  };

  return (
    <div className={css.main}>
      <div className={css.div}>
        <p>Select recipes by quick access buttons</p>
        <p>Or enter main ingredient as key word to search</p>
      </div>
      <form onSubmit={getSearch} className={css.form}>
        <input
          type="text"
          className={css.input}
          value={search} // works wo this
          onChange={updateSearch}
        ></input>
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
