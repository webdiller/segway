import { v4 as uuidv4 } from 'uuid';

const prepareProductsForExtend = ({ products, customer }) => {

  let productArray = [];
  console.log(customer.customer);

  products.forEach((product, indx, array) => {
    let { id, type, stripeId, priceId, name, quantity } = product;
    let currentPriceId = null;

    const idParams = new URLSearchParams(id);
    const warranty = idParams.get('warranty');

    /** Если аксессуар, то 2 условия. Подарок или нет */
    if (type === 'accessory') {
      if (id === 'segway-protective-gear-set' && quantity == 1 && products.some(item => (item.type !== 'accessory' && item.type !== 'bundle'))) {
        /** Если подарок */
        productArray.push({
          id: product.id,
          stripeId: product.stripeIdFree,
          priceId: product.priceIdFree,
          name: product.name,
          quantity: product.quantity,
          price: 0
        })
      } else {
        /** Если не подарок */
        productArray.push({
          id: product.id,
          stripeId: product.stripeId,
          priceId: product.priceId,
          name: product.name,
          quantity: product.quantity,
          price: Number(Number(product.price).toFixed())
        })
      }

    }

    if (type !== 'accessory') {
      const clearId = new URLSearchParams(id);
      const currentId = new URLSearchParams(id);
      let clearIdString;
      clearId.set('warranty', 'null')
      clearIdString = clearId.toString();

      const findProductWithoutWarranty = productArray.find(item => item.id === clearIdString);
      const existWarrantyInCurrentProduct = currentId.get('warranty') !== 'null';

      // Если в новом массиве есть продукт без гарантии
      if (findProductWithoutWarranty) {
        findProductWithoutWarranty.quantity += product.quantity
        if (existWarrantyInCurrentProduct) {
          const currentWarrantyObj = product.warranty.find(warranty => Number(warranty.durationYear) == Number(currentId.get('warranty')))
          Array.from({ length: product.quantity }).forEach(el => {
            /** Оформляем контракты */
            let planId = currentWarrantyObj.planId;
            let purchasePrice = Number(currentWarrantyObj.planPrice.toFixed());
            let referenceId = product.referenceId;
            let transactionDate = new Date().getTime()
            let transactionId = uuidv4()
            let transactionTotal = Number(currentWarrantyObj.planPrice.toFixed())

            productArray.push({
              ...customer,
              id,
              name,
              title: "Extend Protection Plan - Electric Mobility",
              isTest: true,
              plan: {
                planId,
                purchasePrice
              },
              product: {
                referenceId,
                purchasePrice
              },
              transactionDate,
              transactionId,
              transactionTotal,
              currency: "USD"
            })
          })
        }
        // Если в новом массиве нету продукта без гарантии
      } else {
        productArray.push({
          id: clearIdString,
          stripeId: product.stripeId,
          priceId: product.priceId,
          name: product.name,
          quantity: product.quantity,
          price: Number(Number(product.price).toFixed()),
        })
        if (existWarrantyInCurrentProduct) {

          const currentWarrantyObj = product.warranty.find(warranty => Number(warranty.durationYear) == Number(currentId.get('warranty')))

          Array.from({ length: product.quantity }).forEach(el => {
            /** Оформляем контракты */
            let planId = currentWarrantyObj.planId;
            let purchasePrice = Number(currentWarrantyObj.planPrice.toFixed());
            let referenceId = product.referenceId;
            let transactionDate = new Date().getTime()
            let transactionId = uuidv4()
            let transactionTotal = Number(currentWarrantyObj.planPrice.toFixed())

            productArray.push({
              ...customer,
              id,
              name,
              title: "Extend Protection Plan - Electric Mobility",
              isTest: true,
              plan: {
                planId,
                purchasePrice
              },
              product: {
                referenceId,
                purchasePrice
              },
              transactionDate,
              transactionId,
              transactionTotal,
              currency: "USD"
            })
          })
        }
      }
    }
  })

  return productArray

}

export default prepareProductsForExtend