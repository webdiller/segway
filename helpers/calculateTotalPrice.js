export const calculateTotalPrice = (products) => {
  let total = 0
  products.map(product => {

    /** Если аксессуары */
    if (product.type === 'accessory') {
      let price = Number(product.price)
      let quantity = Number(product.quantity)
      total = total + (price * quantity)
    }

    /** Если продукт (не аксессуар) */
    else {
      const idParams = new URLSearchParams(product.id);
      let warranty = idParams.get('warranty')
      let quantity = Number(product.quantity)
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

      /** Если есть цвета у продукта, то изменем цену */
      if (product.colors) {
        /*
         * Ищем цвет по id
         * Зател проверяем у цвета, есть ли математический оператор или цена !== 0
         *  Если есть, то делаем калькуляцию
         *  Иначе пропускаем
         */
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
      }

      total = total + ((price + warranty) * quantity)
    }
  })

  /** 
   * Калькуляция цены. Еысли в корзине имеется защита и один из продуктов
   * Если да, то отнимаем 29.99 от общей суммы
   */
  let existAnyProduct = products.filter(product => product.type !== 'accessory');
  let existProtectionAccessory = products.filter(product => product.id === 'segway-phone-holder');
  let excludePriceForGift = existAnyProduct.length > 0 && existProtectionAccessory.length > 0 ? true : false;
  /** Подарок есть */
  if (excludePriceForGift) {
    // FIXME: на проде вернуть прежнюю цену калькулции
    total = total - 29.99
  }

  return total;
};