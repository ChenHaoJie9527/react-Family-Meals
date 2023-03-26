import { describe, it, expect } from "vitest";
import { filterProductText } from "../hooks";
import { list } from "../mock";

describe("filterProductText", () => {
  it("Search list keywords", () => {
    const isStocked = true;

    const filterList = filterProductText("Apple", list, isStocked);
    console.log("filterList", filterList);
    expect(filterList).toEqual([
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    ]);
  });
  it("Keyword mismatch is []", () => {
    const filterList = filterProductText("aaa", list);
    expect(filterList).toEqual([]);
  });
  it("Show all if no keywords", () => {
    const filterList = filterProductText("", list);
    expect(filterList).toEqual([
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
      {
        category: "Fruits",
        price: "$1",
        stocked: true,
        name: "Dragonfruit",
      },
      {
        category: "Fruits",
        price: "$2",
        stocked: false,
        name: "Passionfruit",
      },
      {
        category: "Vegetables",
        price: "$2",
        stocked: true,
        name: "Spinach",
      },
      {
        category: "Vegetables",
        price: "$4",
        stocked: false,
        name: "Pumpkin",
      },
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    ]);
  });
  it("stocked mismatch is array", () => {
    const isStocked = true;
    const filterList = filterProductText("", list, isStocked);
    expect(filterList).toEqual([
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
      {
        category: "Fruits",
        price: "$1",
        stocked: true,
        name: "Dragonfruit",
      },
      {
        category: "Vegetables",
        price: "$2",
        stocked: true,
        name: "Spinach",
      },
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    ]);
  });
});
