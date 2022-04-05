const prepareProductsForStripe = (products) => (
  products.map((product) => {
    let { id, name, quantity, priceId } = product;

    let currentPriceId = null;

    const idParams = new URLSearchParams(id);
    const warranty = idParams.get('warranty');

    if (warranty == null || warranty == 'null') {
      currentPriceId = priceId
    } else {
      currentPriceId = product.warranty.find(productWarranty => productWarranty.durationYear == warranty).priceId
    }

    return {
      price: currentPriceId,
      quantity,
    }
  })
)

export default prepareProductsForStripe