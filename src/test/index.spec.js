import { describe, it, expect } from "vitest";
import { filterProductText } from "../hooks";
import { list } from "../mock";

describe("filterProductText", () => {
  it("Search list keywords", () => {
    const filterList = filterProductText("Apple", list);
    expect(filterList).toEqual([
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    ]);
  });
  it("Keyword mismatch is []", () => {
    const filterList = filterProductText("aaa", list);
    expect(filterList).toEqual([]);
  });
});
