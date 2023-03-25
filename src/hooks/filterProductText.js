// 通过关键字过滤产品列表
function filterProductText(productName, productList = []) {
  const res = productList.filter((item) => item.name === productName);
  return res;
}

export { filterProductText };
