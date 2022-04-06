export const calculatePriceByColor = (product) => {
  const idParams = new URLSearchParams(product.id);
  let colorPrice = 0;
  let price = Number(product.price)

  let colorOperator
  let colorProduct

  if (product.colors) {
    colorProduct = product.colors.find(item => item.color == idParams.get('color'));
    if (colorProduct && colorProduct.price !== 0 && colorProduct.operator) {
      colorOperator = colorProduct.operator;
      colorPrice = colorProduct.price;
      if (colorOperator == "plus") {
        price = price + colorProduct.price
      } else if (colorOperator == "minus") {
        price = price - colorProduct.price
      }
    }
    return price;
  } else {
    return price;
  }
};