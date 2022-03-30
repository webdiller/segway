const prepareProductsForStripe = (products) => (
  products.map(({ id, name, quantity }) => {

    // TODO: доделать выборку id цены на основании warranty
    const currentId = new URLSearchParams(currentProduct.id);
    let currentPriceId;

    return {
      quantity,
      price_data: {
        currency: "usd",
        unit_amount: 1000, // TODO: Доделать конкретную цену: 4:58:22
        product_data: {
          name: name
        }
      },
    }
  })
)

export default prepareProductsForStripe