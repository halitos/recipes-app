import React, {useState} from 'react'
import "./search.css"

    const Search = ({changeSearch}) => {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");

    function updateSearch(e) {
        setSearch(e.target.value);
      }
    
      const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        console.log(query);
        changeSearch(search)
        setSearch("");
      };

    return (
      <div className="search-container">
        <div className="search-text">
          <p>You can select recipes by quick access buttons</p>
          <p>Or enter main ingredient as key word to search for awesome recipes</p>        
        </div>   
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
    )
}


export default Search;