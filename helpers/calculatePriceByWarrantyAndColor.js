export const calculatePriceByWarrantyAndColor = (product) => {
  let total = product.price;

  const idParams = new URLSearchParams(product.id);
  let warranty = idParams.get('warranty')
  let colorPrice = 0;
  let price = Number(product.price)

  if (warranty.toString() == 'null') {
    warranty = 0
  } else {
    warranty = Number(warranty.toString())
  }

  if (warranty) {
    warranty = Number(product.warranty[warranty - 1].price)
  }

  let colorOperator;
  let colorProduct;
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
  total = ((price + warranty))
  return total;
};