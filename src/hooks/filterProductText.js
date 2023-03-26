// 通过关键字过滤产品列表
function filterProductText(productName, productList = [], isStocked) {
  if (productName) {
    let _arr = [];
    for (let i = 0; i < productList.length; i++) {
      const item = productList[i];
      if (item.name === productName) {
        _arr.push(item);
      }
    }
    if (isStocked) {
      return _arr.filter((item) => item.stocked === isStocked);
    } else {
      return _arr;
    }
  } else {
    if (isStocked) {
      return productList.filter((item) => item.stocked === isStocked);
    } else {
      return productList;
    }
  }
}

export { filterProductText };
