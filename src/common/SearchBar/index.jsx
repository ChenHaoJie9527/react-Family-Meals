import React from "react";
import "../../styles/searchBar.scss";
function SearchBar({ filterText, inStockOnly, setFilterText, setIstokOnly }) {
  const onChange = (el) => {
    const value = el.target.value;
    setFilterText(value);
  };
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={onChange}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setIstokOnly(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
