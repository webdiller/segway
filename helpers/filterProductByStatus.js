export function filterProductByStatus(products) {
  let newArr = [];
  
  for (const product of products) {
    if (product.status == "in-stock") newArr.push(product);
  }

  for (const product of products) {
    if (product.status == "preorder") newArr.push(product);
  }

  for (const product of products) {
    if (product.status == "out-of-stock") newArr.push(product);
  }

  return newArr
}