export const calculateTotalPrice = (products) => {
  let total = 0
  products.map(product => {
    if (product.type === 'accessory') {
      let price = Number(product.price)
      let quantity = Number(product.quantity)
      total = total + (price * quantity)
    }
    else {
      const idParams = new URLSearchParams(product.id);
      let warranty = idParams.get('warranty')
      let color = idParams.get('color')
      let quantity = Number(product.quantity)
      const price = Number(product.price)

      if (warranty.toString() == 'null') {
        warranty = 0
      } else {
        warranty = Number(warranty.toString())
      }

      if (color.toString() == 'null') {
        color = 0
      } else {
        color = color.toString()
      }

      if (warranty) {
        warranty = Number(product.warranty[warranty - 1].price)
      }

      if (color) {
        const colorPrice = product.colors.find(el => el.color === color).price;
        color = colorPrice;
      }

      /** 
       * Калькуляция цены. Еысли в корзине имеется защита и один из продуктов
       * Если да, то отнимаем 29 от общей суммы
       */
      // TODO: Перенести логику в extraReducers
      let existAnyProduct = products.filter(product => product.type !== 'accessory');
      let existProtectionAccessory = products.filter(product => product.id === 'segway-protective-gear-set');
      let excludePriceForGift = existAnyProduct.length > 0 && existProtectionAccessory.length > 0 ? true : false;

      if (!excludePriceForGift) {
        console.log('not match');
        total = total + ((price + warranty + color) * quantity)
      } else {
        console.log('match');
        total = (total + ((price + warranty + color) * quantity)) - 29.99
      }

    }
  })
  return total;
};