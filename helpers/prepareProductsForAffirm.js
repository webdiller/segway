const prepareProductsForAffirm = (products) => (
  products.map((product) => {
    let { id, name, price, quantity, priceId, imgPath, pageLinkNameWithCategory } = product;

    let currentPriceId = null;

    const idParams = new URLSearchParams(id);
    const warranty = idParams.get('warranty');

    if (warranty == null || warranty == 'null') {
      currentPriceId = priceId
    } else {
      currentPriceId = product.warranty.find(productWarranty => productWarranty.durationYear == warranty).priceId
    }

    return {
      display_name: name,
      sku: id,
      unit_price: price * 100,
      qty: quantity,
      item_image_url: `${process.env.HOST}${imgPath}`,
      item_url : pageLinkNameWithCategory ? `${process.env.HOST}${pageLinkNameWithCategory}` : `${process.env.HOST}`
    }
  })
)

export default prepareProductsForAffirm