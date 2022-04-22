const prepareMetadataForStripe = (products) => {
  let indx = 0;
  const finalObj = {};

  let productArray = products.map((product) => {
    let { id, quantity, stripeId, priceId } = product;
    indx++;
    let currentPriceId = null;

    const idParams = new URLSearchParams(id);
    const warranty = idParams.get('warranty');

    if (warranty == null || warranty == 'null') {
      currentPriceId = priceId
    } else {
      currentPriceId = product.warranty.find(productWarranty => productWarranty.durationYear == warranty).priceId
    }

    return {
      stripeId: `${stripeId} x ${quantity}`,
      priceId: currentPriceId
    }
  })

  productArray.forEach(({ stripeId, priceId }) => {
    finalObj[stripeId] = priceId
  });

  return finalObj
}

export default prepareMetadataForStripe

