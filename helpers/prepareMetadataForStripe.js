/**
 * 
 * @param {array} products 
 * @description Максимальная длинна ключа 40 символов
 * @example 
 * const metadata = prepareMetadataForStripe(products)
 * console.log(metadata) 
     {
     "id=011&warranty=null&color=FFBFC0 x 1": "price_1KxnnyC3bu2cRJ58G4Ebo9B8",
     "id=011&warranty=1&color=FFBFC0 x 2": "price_1KxnnzC3bu2cRJ584y1al0Gw",
     "id=011&warranty=2&color=FFBFC0 x 1": "price_1KxnnzC3bu2cRJ58NJ2uU6ML",
     "id=011&warranty=3&color=FFBFC0 x 1": "price_1KxnnzC3bu2cRJ58fIG7PwtP"
    }
 */
const prepareMetadataForStripe = (products) => {
  const finalObj = {};

  let productArray = [];
  products.forEach((product, indx, array) => {
    let { id, quantity, stripeId, priceId } = product;
    let currentPriceId = null;

    const idParams = new URLSearchParams(id);
    const warranty = idParams.get('warranty');

    if (warranty == null || warranty == 'null') {
      currentPriceId = priceId
    } else {
      currentPriceId = product.warranty.find(productWarranty => productWarranty.durationYear == warranty).priceId
    }

    productArray.push({
      id,
      quantity,
      stripeId: `${id} x ${quantity}`,
      priceId: currentPriceId
    })
  })


  productArray.forEach(({ stripeId, priceId }) => {
    finalObj[stripeId] = priceId
  });


  return finalObj
}

export default prepareMetadataForStripe