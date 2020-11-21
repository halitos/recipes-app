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
    )
}


export default Search;