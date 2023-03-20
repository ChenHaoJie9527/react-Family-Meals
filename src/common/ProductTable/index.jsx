import React from "react";

function ProductCategoryRow({ category }) {}

function ProductRow({ product }) {}

function ProductTable({ ProductList = [] }) {
  const rows = [];
  const lastCategory = null;
  ProductList.forEach((item) => {
    if (item.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={item.category} key={item.category} />
      );
    }
    rows.push(<ProductRow product={item} key={item.name} />);
    lastCategory = item.category;
  });
  return (
    <table>
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
