import { useState } from "react";
import "../styles/filterableProductTable.scss";
import { SearchBar } from "../common";
import { ProductTable } from "../common";
import { list } from "../mock";

function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setIstokOnly] = useState(false);
  return (
    <div className="container">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setIstokOnly={setIstokOnly}
      />
      <ProductTable
        ProductList={list}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;
