import React from "react";
import { filterProductText } from "../../hooks/filterProductText";

import "../../styles/productTable.scss";
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ ProductList = [], filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;
  const filterList = filterProductText(filterText, ProductList, inStockOnly);
  filterList.forEach((item) => {
    if (item.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={item.category} key={item.category} />
      );
    }
    rows.push(<ProductRow product={item} key={item.name} />);
    lastCategory = item.category;
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
