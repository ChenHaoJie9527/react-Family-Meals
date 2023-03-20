import React from "react";
import "../../styles/searchBar.scss";
function Search() {
  return (
    <form className="form">
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> <span>Only show product in stock</span>
      </label>
    </form>
  );
}

export default Search;
