import React from "react";
import "../styles/filterableProductTable.scss";
import { Search } from "../common";
import { ProductTable } from "../common";
import { list } from "../mock";

function FilterableProductTable() {
  return (
    <div className="container">
      <Search />
      <ProductTable ProductList={list} />
    </div>
  );
}

export default FilterableProductTable;
