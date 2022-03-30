import { createSlice, current } from "@reduxjs/toolkit";
import { calculateTotalPrice } from "helpers/calculateTotalPrice";

const initialState = {
  products: [],
  totalPrice: 0,

  preperedBundle: null,
  preparedProduct: null,
  preparedProtectionAccessory: null,
  currentPrice: null
}

export const productCartSlice = createSlice({
  name: 'productCart',
  initialState,
  reducers: {

    addQuantity: (state, action) => {
      const { id, count = 1 } = action.payload;
      const product = state.products.find((product) => product.id === id)

      if (product) {
        product.quantity = product.quantity + count
      } else {
        console.log('Can"t fint product');
      }

      state.totalPrice = calculateTotalPrice(state.products)
    },

    pushProduct: (state, action) => {
      const item = action.payload;
      const product = state.products.find((product) => product.id === item.id)

      /** Если нашли продукт в текущей корзине, то увеличиваем значение */
      if (product) product.quantity = product.quantity + 1

      /** Если не нашли продукт в текущей корзине, то добавляем его в корзину */
      if (!product) state.products.push(item)

      /** Если в корзине есть продукт и нету защиты, то добавляем ее в корзину */
      let existAnyProduct = state.products.filter(product => product.type !== 'accessory');
      let existProtectionAccessory = state.products.filter(product => product.id === 'segway-protective-gear-set');
      let condition = existAnyProduct.length !== 0 && existProtectionAccessory.length === 0 ? true : false;
      if (condition) state.products = [...state.products, state.preparedProtectionAccessory]

      /** Сортируем товары в корзине */
      const accessories = state.products.filter(product => product.type === 'accessory');
      const models = state.products.filter(product => product.type !== 'accessory');
      state.products = [...models, ...accessories]
      
      state.totalPrice = calculateTotalPrice(state.products)
    },

    removeProduct: (state, action) => {
      const item = action.payload;
      const previusStateOfProducts = JSON.parse(JSON.stringify(state.products))
      const product = state.products.find((product) => product.id === item.id)

      /* Если есть продукт в стейте
       * Если количество продукта 1 или 0, то удаляем его из стейта
       * Если количество продукта больше 1, то уменьшаем количество
       */
      if (product) {
        if (product.quantity === 1 || product.quantity === 0) {
          state.products = state.products.filter((product) => product.id !== item.id)
        }
        if (product.quantity > 1) {
          product.quantity = --product.quantity
        }
      }

      /*
       * Удаление защиты и стейта. Если 
       * в прошлойте стейте был один продукт типа type !== 'accessory && quantity этого продукта был === 1 && (existAnyProductInPreviusState)
       * в настоящем стейте нет ни одного продукта типа type !== 'accesory' && (existAnyProductInCurrentState)
       * в настоящем стейте есть продукт(защита) с id === 'segway-protective-gear-set' && у продукта(защита) quantity === 1 (existProtectionAccessory)
       * 
       * Уменьшение quantity у защиты. Если 
       * в прошлойте стейте был один продукт типа type !== 'accessory && quantity этого продукта был === 1 && (existAnyProductInPreviusState)
       * в настоящем стейте нет ни одного продукта типа type !== 'accesory' && (existAnyProductInCurrentState)
       * в настоящем стейте есть продукт(защита) с id === 'segway-protective-gear-set' && у продукта(защита) quantity >=2 (existProtectionAccessory)
       */
      const existAnyProductInPreviusState = previusStateOfProducts.find(product => product.type !== 'accessory' && product.quantity === 1) ? true : false
      const existAnyProductInCurrentState = state.products.find(product => product.type !== 'accessory') ? true : false
      const existProtectionAccessory = state.products.find(product => product.id === 'segway-protective-gear-set');
      try {
        if (
          existAnyProductInPreviusState &&
          !existAnyProductInCurrentState &&
          existProtectionAccessory?.quantity === 1
        ) {
          state.products = state.products.filter(product => product.id !== 'segway-protective-gear-set');
        } else if (
          existAnyProductInPreviusState &&
          !existAnyProductInCurrentState &&
          existProtectionAccessory?.quantity >= 2
        ) {
          const protectionAccessory = state.products.find(product => product.id === 'segway-protective-gear-set');
          protectionAccessory.quantity = --protectionAccessory.quantity
        }
      } catch (error) {
        console.log('Handle error: ', error);
      }

      state.totalPrice = calculateTotalPrice(state.products)
    },

    setPropertiesForProduct: (state, action) => {
      const { currentProduct, selectedWarranty, selectedColor } = action.payload;

      const currentId = new URLSearchParams(currentProduct.id);
      const newId = new URLSearchParams(currentProduct.id);

      newId.set('warranty', selectedWarranty);
      newId.set('color', selectedColor);

      const existProduct = state.products.find(product => product.id === newId.toString());

      if (!existProduct) {
        const currentProduct = state.products.find(product => product.id === currentId.toString());
        currentProduct.id = newId.toString()
      } else {
        const currentProductQuantity = state.products.find(product => product.id === currentId.toString()).quantity;
        const newProductQuantity = state.products.find(product => product.id === newId.toString()).quantity;
        const summOfQUantity = Number(currentProductQuantity) + Number(newProductQuantity);

        const filteredProducts = state.products.filter(product => product.id !== newId.toString())
        const currentProduct = state.products.find(product => product.id === currentId.toString())
        currentProduct.quantity = summOfQUantity
        currentProduct.id = newId.toString()
        state.products = filteredProducts
      }

      state.totalPrice = calculateTotalPrice(state.products)
    },

    /** Инициализуруем продукт для кнопок с быстрым добавлением товара в корзину */
    initProduct: (state, action) => {
      const { product, currentPrice } = action.payload;
      state.preparedProduct = product
      state.currentPrice = currentPrice
    },

    setPreperedBundle: (state, action) => {
      const bundle = action.payload
      state.preperedBundle = bundle;
    },

    setProperties: (state, action) => {
      const { selectedWarranty, selectedColor } = action.payload;

      const idParams = new URLSearchParams(state.preparedProduct.id);
      idParams.set('warranty', selectedWarranty)
      idParams.set('color', selectedColor)

      state.preparedProduct.id = idParams.toString()
    },

    setCurrentPrice: (state, action) => {
      state.currentPrice = action.payload
    },

    /** Инициализуруем подарок для кнопок с быстрым добавлением товара в корзину */
    setPreparedProtectionAccessory: (state, action) => {
      let preparedProtection = action.payload;
      state.preparedProtectionAccessory = preparedProtection
    },

    clearProducts: (state, action) => {
      state.products = [];
      state.totalPrice = 0;
    }

  }
})

export const {
  addQuantity,
  pushProduct,
  removeProduct,
  setPropertiesForProduct,
  initProduct,
  setProperties,
  setCurrentPrice,
  setPreparedProtectionAccessory,
  setPreperedBundle,
  clearProducts
} = productCartSlice.actions
export default productCartSlice.reducer